import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import { View, ScrollView, TextInput, StyleSheet } from "react-native"
import AppHeader from "../components/appHeader"
import PokemonList from "../components/pokemonList"
import PokemonDetails from "../components/pokemonDetails"
import GetPokemonsButton from "../components/getPokemonsButton"
import * as config from "../constants/config"

class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isPokemonDetailVisible : false,
      params  : {
        offset 	: config.offset,
        limit	: config.limit
      }
    }
  }

  componentWillMount() {
    // get the initial api call with parameters from system config
    this.props.getPokemons(this.state.nextUrl, this.state.params)
  }
  componentWillReceiveProps(nextProps) {
    // re-render pokemonDetail modal only when props changed
    if(this.props.pokemonDetails != nextProps.pokemonDetails) {
      this.setDetailModalVisibility(true)
    }
  }

  getPokemonDetails(url) {
    this.props.getPokemonDetails(url)
  }

  getPokemons() {
    // pass nextUrl to be fetched from previous call into store
    this.props.getPokemons(this.props.pokemons.nextUrl, this.state.params)
  }

  setDetailModalVisibility(visibility) {
    this.setState({isPokemonDetailVisible : visibility})
  }

  getAppHeader() {
    return <AppHeader/>
  }

  getPokemonListComponent() {
    const pokemons = this.props.pokemons.pokemonResults || []
    return <PokemonList 	pokemons = { pokemons } getPokemonDetails = {this.getPokemonDetails.bind(this)} />
  }

  getPokemonDetailComponent() {
    const pokemonDetails = this.props.pokemonDetails
    return <PokemonDetails 	pokemonDetails = { pokemonDetails } 
      visibility = {this.state.isPokemonDetailVisible}
      setDetailModelVisibility = {this.setDetailModalVisibility.bind(this)} />
  }

  getMorePokemonButtonComponent() {
    return <GetPokemonsButton 	getPokemons = { this.getPokemons.bind(this) } />
  }


  render() {
    const appHeader = this.getAppHeader()
    const pokemonListComponent = this.getPokemonListComponent()
    const pokemonDetailComponent = this.getPokemonDetailComponent()
    const getMorePokemonButtonComponent = this.getMorePokemonButtonComponent()

    return <View style={{flex:1}}>
        {appHeader}
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.inputs}
            placeholder="Add pokemon"
            />
        </View>
        <ScrollView style={{flex:1}}>
            {getMorePokemonButtonComponent}
            {pokemonListComponent}
            {pokemonDetailComponent}
            
        </ScrollView>
    </View>
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    pokemonDetails: state.pokemonDetails
  }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#eaeaea",
        padding: 10,
        borderBottomWidth: 1,
        width: "60%",
        height:70,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems:'center',
        left: "10%",
        marginTop: 50,
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize: 20
    },
  });

export default connect(mapStateToProps)(HomeContainer)