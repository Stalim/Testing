import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Navigator from './Navigator';
import firebase from 'firebase';



export default class App extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
     name:"",
     email:"",
     temp:"",

   };


   var config = {
    apiKey: "AIzaSyCL1i8J3QM3Js3wzI4qH-lksvPR6BUrGDs",
    authDomain: "testing-d9162.firebaseapp.com",
    databaseURL: "https://testing-d9162.firebaseio.com",
    projectId: "testing-d9162",
    storageBucket: "testing-d9162.appspot.com",
    messagingSenderId: "660611603093",
    appId: "1:660611603093:web:d67c1dc2e62af8ed10599c"
   };

   if (!firebase.apps.length){
   firebase.initializeApp(config);
   };

  }

PassName = (name, email) => {

  var userId = 0;

//Gets length of all users
  firebase.database().ref("Users").on("value", function(snapshot) {

    console.log(snapshot.numChildren())

    userId = snapshot.numChildren()
})

console.log(userId)

  firebase.database().ref('Users/' + userId).set({
    name: name,
    email: email,

  }).then(() => {
    console.log('INSERTED!!!');
    alert('User inserted')
    {/*this.incrementCount()*/}

  }).catch((error) => {
    console.log(error);
  });
}
ReadBack = (email) => {

  var useId;

  //Gets length of all users
    firebase.database().ref("Users").on("value", function(snapshot) {
      userId = snapshot.numChildren()
  })

  var count = 0;

  const idk = firebase.database().ref('Users/').on('value', (snapshot) => {
        let data = snapshot.val();
        let items = Object.values(data);


    while(count < userId){
      if(items[count].email === email){
        this.props.navigation.navigate('screenDos', this.state.email);
        break;
      }
      count++;

      if(count === userId){
        alert('User not found')
        break;
      }
    }

  });
}

  render(){

    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>

      <View style={{marginTop:100}}>
        <TextInput
        style={{ height: 40, width:150, borderColor: 'gray', borderBottomWidth: 1, }}
        placeholder="Insert name into DB"
        onChangeText={name => this.setState({ name })}
        />


        <TextInput
        style={{ height: 40, width:150, borderColor: 'gray', borderBottomWidth: 1, }}
        placeholder="Insert email into DB"
        onChangeText={email => this.setState({ email })}
        />
      </View>

      <Text>{this.state.name}</Text>

      <Button
          onPress={() => this.PassName(this.state.name, this.state.email)}
          title='Press to Insert'

          />

          <Button
              onPress={() => this.ReadBack( this.state.email)}
              title='Press to Retreive'
              />

              <Text>{this.state.temp}</Text>
      </View>
    )
  }
}
