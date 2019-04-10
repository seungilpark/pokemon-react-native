import React, {Component} from "react";
import {Provider} from "react-redux";
import { View } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";
import reducer from "./reducers";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers} from "redux";
import DexContainer from "./screens/DexScreen";
import LoginScreen from "./screens/LoginScreen";
import BattleScreen from "./screens/BattleScreen";
import TeamSelectionScreen from "./screens/TeamSelectionScreen";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import PokemonMapScreen from "./screens/pokemonmap"



Reactotron.configure({ host: "YOUR_INTERNAL_IP_ADDRESS" }) 
  .useReactNative()
  .use(reactotronRedux())
  .connect();


const store = createStore(reducer, applyMiddleware(thunk))
console.ignoredYellowBox = ["Setting a timer"];

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    TeamSelect: TeamSelectionScreen,
    Battle: BattleScreen,
    Pokedex: DexContainer,
    PokemonMap: PokemonMapScreen
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1
  }
};


