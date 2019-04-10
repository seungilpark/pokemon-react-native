import React, { Component } from "react";
import { View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Pusher from "pusher-js/react-native";
import { Audio } from "expo";

import CustomText from "../components/CustomText";
import PokemonList from "../components/PokemonList";
import ActionList from "../components/ActionList";

import { connect } from "react-redux";
import { setTeam, setPokemon } from "../actions";
import moves_data from "../data/moves_data"

import uniqid from "../helpers/uniqid";
import shuffleArray from "../helpers/shuffleArray";


class TeamSelectionScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    is_loading: false
  };
  constructor(props) {
    super(props);
    this.pusher = null;
    this.my_channel = null;
    this.backgroundSound = null;
  }
  
  async componentDidMount() {
    try {
      this.backgroundSound = new Audio.Sound();
      await this.backgroundSound.loadAsync(
        require("../assets/sounds/background/final-road.mp3")
      );
      await this.backgroundSound.setIsLoopingAsync(true);
      await this.backgroundSound.playAsync();
    } catch (error) {
      console.log("error loading background sound: ", error);
    }
  }

  render() {
    const { selected_pokemon } = this.props;
    return (
      <View style={styles.container}>
        <CustomText styles={[styles.headerText]}>Select your team</CustomText>

        {selected_pokemon.length == 2 && (
          <View>
            {this.state.is_loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffbf5a" />
                <CustomText styles={styles.messageText}>
                  Waiting for opponent..
                </CustomText>
              </View>
            )}

            {!this.state.is_loading && (
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={this.confirmTeam}
              >
                <CustomText>Confirm Selection</CustomText>
              </TouchableOpacity>
            )}
          </View>
        )}
        <PokemonList
          data={this.props.pokemon}
          numColumns={1}
          action_type={"select-pokemon"}
        />
    </View>
    );
  }

  confirmTeam = () => {
    const { selected_pokemon, setTeam, setPokemon, navigation} = this.props;

    let team = selected_pokemon.slice(0); // the array which stores the data for the Pokemon team selected by the user
    let pokemon_ids = [];
    let team_member_ids = [];
    team = team.map(item => {
      let hp = 500;
      let shuffled_moves = shuffleArray(item.moves);
      let selected_moves = shuffled_moves.slice(0, 4);

      let moves = moves_data.filter(item => {
        return selected_moves.indexOf(item.id) !== -1;
      });

      let member_id = uniqid();

      pokemon_ids.push(item.id);
      team_member_ids.push(member_id);

      return {
        ...item,
        team_member_id: member_id, // unique ID for identifying each Pokemon in the team
        current_hp: hp, // current HP. This gets updated when an opponent Pokemon attacks
        total_hp: hp,
        moves: moves,
        is_selected: false // no longer needed
      };
    });
    // update the store with the new team and Pokemon data
    setTeam(team);
    setPokemon(team[0]);
    // next: set is_loading to true in state and navigate to Battle screen
    this.setState({
      is_loading: true // show activity indicator
    });

    const username = navigation.getParam("username"); // get the username passed from the login screen

    this.pusher = new Pusher("34e87c06e0771c12f0e4", {
      authEndpoint: "https://d46d9f13.ngrok.io/pusher/auth",
      cluster: "us3",
      encrypted: true,
      auth: {
        params: {
          username: username,
          pokemon_ids: pokemon_ids,
          team_member_ids: team_member_ids
        }
      }
    });

    this.my_channel = this.pusher.subscribe(`private-user-${username}`);
    this.my_channel.bind("pusher:subscription_error", status => {
      Alert.alert(
        "Error",
        "Subscription error occurred. Please restart the app"
      );
    });

    this.my_channel.bind("pusher:subscription_succeeded", data => {
      this.my_channel.bind("opponent-found", data => {
        let opponent =
          username == data.player_one.username
            ? data.player_two // object containing player two's data
            : data.player_one; // object containing player one's data

        let first_turn =
          username == data.player_one.username
            ? "you"
            : data.player_two.username;

        Alert.alert(
          "Opponent found!",
          `${
            opponent.username
          } will take you on! First turn goes to ${first_turn}`
        );

        this.setState({
          is_loading: false,
          username: ""
        });
      navigation.navigate("Battle", {
        pusher: this.pusher,
        username: username,
        opponent: opponent,
        my_channel: this.my_channel,
        first_turn: first_turn
      });
      this.backgroundSound.stopAsync()
    });
  });
}}

const mapStateToProps = ({ team_selection }) => {
  const { pokemon, selected_pokemon } = team_selection;

  return {
    pokemon,
    selected_pokemon 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setTeam: team => {
      dispatch(setTeam(team));
    },
    setPokemon: pokemon => {
      dispatch(setPokemon(pokemon));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSelectionScreen);

const styles = {
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  confirmButton: {
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#95ff84"
  },
  loadingContainer: {
    alignItems: "center"
  },
  messageText: {
    fontSize: 13,
    color: "#676767"
  }
};