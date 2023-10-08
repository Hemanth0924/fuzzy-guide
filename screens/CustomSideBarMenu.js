import React from "react";
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
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class CustomSideBarMenu extends Component{
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

      render() {
          let props = this.props;
          return(
              <View 
              style = {{
                  flex:1,
                  backgroundColor: this.state.light_theme ?"white":"#15193C"
              }}
              >

                <Image
                source = {require("../assets/logo.png")}
                style = {styles.SideBarMenuProfileIcon
                }
                ></Image>

              <DrawerContentScrollView{...props}>
                <DrawerItemList{...props}></DrawerItemList>
              
              </DrawerContentScrollView>  
              </View>
          )
      }

    
}