import React from "react";
import {
  Button,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { Constants, Location, Permissions } from "expo";
import pokemonList from '../data/pokemon_list';
let { width, height } = Dimensions.get("window");

// get random pokemon list [pok1{ name:, img, id, }, pok2 { name, img, id }...]
// turn them into list of markers
// display current location with player character image marker 
// animation of ring looks like a radar 


export default class PokemonMap extends React.Component {

  constructor() {
    super();
    this.state = {
      region: {
        latitude: 49.1801346102537,
        longitude: -122.84251833334565,
        latitudeDelta: 0.01500115405027003,
            longitudeDelta: 0.019624405920505524
      },
      locationPermission: "unknown",
      randomPokemon:[]
    };
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.setState({ locationPermission: status });
  };

  _getRandomPokemon = () => {
    let randomPokemon = [];
    let nums = new Array(52).fill(1).map((el,ind)=>ind);
    let randomNums = [];
    while(new Set(randomNums).size < 12){
      let r = nums[Math.floor(Math.random()*51)];
      randomNums.push(r);
    }
    randomNums = new Set(randomNums);
    randomNums = [...randomNums];
    randomPokemon =  randomNums.map(num => pokemonList[num]);
    // console.log(randomPokemon)
    return randomPokemon; 
  }

  _getRandomCoords = (coords) => {
    // takes coords obj
    // add random offsets
    // return new coords obj
    let { latitude, longitude } = coords;
    let latOffset = parseFloat("0.00" + Math.floor(Math.random() * 50));
    let lngOffset = parseFloat("0.00" + Math.floor(Math.random() * 50));
    if (Math.round(Math.random())) latitude += latOffset;
    else latitude -= latOffset;
     
    if (Math.round(Math.random())) longitude += lngOffset;
    else longitude -= lngOffset;

    return ({ latitude, longitude});

  }

  renderRandomPokemons = () => {
    return this.state.randomPokemon.map(pokemon=>{
      let coords = this._getRandomCoords({latitude:this.state.region.latitude, longitude:this.state.region.longitude})
      return (
        <MapView.Marker
          coordinate={coords}
          minDelta={0.5}
          maxDelta={2}
          key={pokemon.id}
        >
          <Image style={{width:20, height:20}} source={pokemon.img} />
          
        </MapView.Marker>  
      )
    })
  }
  componentDidMount() {
    this._getLocationAsync();
    navigator.geolocation.getCurrentPosition(
      position => {
        let rp = this._getRandomPokemon();
        // console.log(rp);
        this.setState({
          region: {
            latitude: position["coords"]["latitude"],
            longitude: position["coords"]["longitude"],
            latitudeDelta: 0.01500115405027003,
            longitudeDelta: 0.019624405920505524
          },
          randomPokemon:rp 
        });
      },
      error => alert(JSON.stringify(error))
    );

  }
  // {/* onRegionChange={region => this.setState({ region })} */}
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 49.1801346102537,
            longitude: -122.84251833334565,
            latitudeDelta: 0.02000115405027003,
            longitudeDelta: 0.027624405920505524
          }}
          mapType="terrain"
          followsUserLocation={true}
          showsCompass={false}
          showsPointsOfInterest={false}
          region={this.state.region}
          style={styles.map}
          
        >
        <MapView.Marker
          coordinate={{latitude:this.state.region.latitude, longitude:this.state.region.longitude}}
          minDelta={0.5}
          maxDelta={2}
          title="You"
          description="Hi!"
        >
          <Image style={{width:40, height:40}} source={require("../assets/images/pokemon/player.gif")} resizeMode="cover" />
        </MapView.Marker>  
        {this.renderRandomPokemons()}

        
        </MapView>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: width,
    height: height
  }
});
