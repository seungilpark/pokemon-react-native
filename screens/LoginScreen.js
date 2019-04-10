import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Alert} from "react-native";

import CustomText from "../components/CustomText";
import { Audio } from "expo";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.backgroundSound = null;
    this.state = {
      username: "",
      inputvisiable: false
    }
  };

  async componentDidMount() {
    try {
      this.backgroundSound = new Audio.Sound();
      await this.backgroundSound.loadAsync(
        require("../assets/sounds/background/opening.mp3")
      );
      await this.backgroundSound.setIsLoopingAsync(true); 
      await this.backgroundSound.playAsync(); 
    } catch (error) {
      console.log("error loading background sound: ", error);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/pokemon/pikachu.gif")} />
          <CustomText styles={styles.headerText}>Pokémon App</CustomText>
        </View>

        <View style={styles.main}>
          <TouchableOpacity onPress={() => this.setState({inputvisiable: !this.state.inputvisiable})} style={[styles.buttonContainer, styles.loginButton]}>
            <CustomText styles={styles.buttonText}>Pokémon Battle</CustomText>
          </TouchableOpacity>
          {this.state.inputvisiable && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Enter Username"
                onChangeText={username => this.setState({ username: username })}
                value={this.state.username}
              />
              
            </View>
          )}
          {this.state.inputvisiable && (
            <TouchableOpacity onPress={this.login} style={styles.button}>
             <CustomText styles={styles.SigninText}>Sign in</CustomText>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={this.gotodex} style={[styles.buttonContainer, styles.loginButton]}>
            <CustomText styles={styles.buttonText}>Pokémon Dex</CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotomap} style={[styles.buttonContainer, styles.loginButton]}>
            <CustomText styles={styles.buttonText}>Pokémon Map</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  login = () => {
    let username = this.state.username;

    if (username) {
      this.props.navigation.navigate("TeamSelect", {
        username
      });
      this.backgroundSound.stopAsync();
    } else {
      Alert.alert("Invalid Username", "Please enter a username")
    }
  };

  gotodex = () => {
      this.props.navigation.navigate("Pokedex");
      this.backgroundSound.stopAsync();
  };

  gotomap = () => {
    this.props.navigation.navigate("PokemonMap");
    this.backgroundSound.stopAsync();
  };


};

  



const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },
  main: {
    flex: 6,
    justifyContent: "flex-start"
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#DCDCDC',
      borderRadius:30,
      borderColor: "#ccc",
      borderWidth: 1,
      backgroundColor: "#eaeaea",
      padding: 5,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  button: {
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  },
  SigninText: {
    fontSize: 18,
    color: "#05a5d1"
  },
});
 
