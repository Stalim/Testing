import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import firebase from 'firebase';


export default class ScreenTwo extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
    isLoaded:false,
    name:"",
    email: this.props.navigation.state.params,
   };
 }

    componentDidMount(){

      var count = 0;
      var numUsers ;

      firebase.database().ref("Users").on("value", function(snapshot) {
        numUsers = snapshot.numChildren()
      })

      const idk = firebase.database().ref('Users/').on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);


      while(count < numUsers){
        if(items[count].email ===   this.state.email){
            console.log(count)
            this.setState({
              name:items[count].name
            })
            break;
        }
        count++;

      }
          });
    }

  render() {
    return (
      <View>

        <Text>
          {this.state.email}
        </Text>

        <Text>
          {this.state.name}
        </Text>


      </View>
    );
  }
}
