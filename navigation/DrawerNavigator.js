import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Profile from "../screens/Profile"
import Logout from "../screens/Logout"
import firebase from "firebase";
import CustomSideBarMenu from "../screens/CustomSideBarMenu"

export default class DrawerNavigator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      light_theme:true

    };
  }



  componentDidMount(){
    let Theme;
    
    firebase
    .database()
    .ref("/users/"+ firebase.auth().currentUser.uid)
    .on("value",function(snapShot){
      theme = snapShot.val().current_theme;
    });

    this.setState({light_theme: theme === "light"? true:false});
  }

  render(){
    let props = this.props;
    return(
<Drawer.Navigator
drawerContent = {props => <CustomSideBarMenu{...props} />}
screenOptions = {{
  headerShown : false,
  drawerActiveTintColor:"grey",
  drawerInactiveTintColor:"#E91E63",
  itemsStyle : {marginVertical:5}
  
}}
>

  <Drawer.Screen
  name = "myHome"
  component = {stackNavigator}
  options = {{unMountOnBlur:true}}
  />

<Drawer.Screen
  name = "Profile"
  component = {stackNavigator}
  options = {{unMountOnBlur:true}}
  />

<Drawer.Screen
  name = "Logout"
  component = {stackNavigator}
  options = {{unMountOnBlur:true}}
  />

  
</Drawer.Navigator>
    )
  }
}