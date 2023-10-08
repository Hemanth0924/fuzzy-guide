import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Firebase from "firebase";
import * as Font from "expo-font";

export default class DataBaseScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "" ,
            password: "",
            userSignedIn: false
        };
    }

    async_LoadFontsAsync(){
        this.setState({fontsLoaded: true})
        
    }
    
    ComponentDidMount(){
        this.LoadFontsAsync
    }

    SignIn = async(email,password) =>{
        firebase
        .auth()
        .SignInWithEmailAndPassword(email,password)
        .then(()=> {
            this.props.navigation.navigate("dashboard");
        })

        .catch(error => {
        Alert.alert(error.message);
        });
    };

    render(){
        if(this.state.fontsLoaded){
            const { email, password}  = this.state;
         }
       return(
           <View style = {styles.container}>
            <Text style = {styles.AppTitleText}></Text>
            <TextInput 
            
            style = {styles.TextInput}
            placeholder = {"Enter Email"}
            ></TextInput>
            
            <TextInput 
            placeholder = {"Enter Password"}
            style = {styles.password}></TextInput>
            
           </View>
           
       )
        
    }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#15193c"
        },
        appTitleText: {
          color: "white",
          fontSize: RFValue(28),
          fontFamily: "Bubblegum-Sans"
        },
        textinput: {
            width: RFValue(250),
            height: RFValue(50),
            padding: RFValue(10),
            borderColor: "#FFFFFF",
            borderWidth: RFValue(4),
            borderRadius: RFValue(10),
            fontSize: RFValue(20),
            color: "#FFFFFF",
            backgroundColor: "#15193c",
            fontFamily: "Bubblegum-Sans"
          },
        password:{
            fontSize: RFValue(12),
            color: "#FFFFFF",
            fontFamily: "Bubblegum-Sans",
            textDecoration: "underline",
            textDirection: "row",
            alignItems: "center",
            padding: RFValue(10)
            
        }
      });

