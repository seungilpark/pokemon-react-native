import React, {Component} from "react"
import {Image} from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Container, Content, Text, Icon, Fab, Button } from "native-base"
import  Modal  from "react-native-modal"
import {ListItem} from "react-native-elements"

class PokemonDetailsMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: {},
      weight: "",
      name: "",
      height: "",
      abilities: []
    }
  }
  
  componentWillReceiveProps(nextProps) {
    // there might be a template in the reducer or actions
    // this seemed more traceable at 3 AM in the morning :)
    if (this.props.pokemonDetails != nextProps.pokemonDetails) {
      const pokemonDetails = nextProps.pokemonDetails
      this.setState({
        id : pokemonDetails.id,
        images: pokemonDetails.sprites,
        weight: pokemonDetails.weight,
        name: pokemonDetails.name,
        abilities: pokemonDetails.abilities,
        height: pokemonDetails.height,
      })
    }
  }


  render() {
    const name = this.state.name
    const weight = this.state.weight
    const abilities = this.state.abilities
    const image = this.state.images
    const height = this.state.height

    return (
      <Modal
        animationType="slide"
        transparent={ false }
        presentationStyle="fullScreen"
        visible={ this.props.visibility }
        onRequestClose={() => this.props.setDetailModelVisibility(false)}>
        <Container>
          <Content>
            <Grid style={{marginTop: 20}}>
              <Row style={{ backgroundColor: "#263238"}}>
                <Image source={{uri: image.front_default}} style={{height: 200, width: 200, flex: 1}}/>
                <Text textAlign = 'center' style= {{
                  color: "#fff",
                  fontSize: 20,
                  marginTop: 80,
                  flex: 1}}>
                  {name}
                </Text>
              </Row>
              <Row style={{ backgroundColor: "#FFF"}}>
                <Col>
                    <Button bordered success style={{marginTop: 15}}>
                        <Text>WEIGHT: {weight}</Text>
                    </Button>
                    
                </Col>
                <Col>
                  
                <Button bordered success style={{marginTop: 15, right: -30}}>
                    <Text>HEIGHT: {height}</Text>
                </Button>
                </Col>
              </Row>
              <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 50 }}>ABILITIES:</Text>
                {
                abilities.map((a, i) => (
                <ListItem
                    button
                    roundAvatar
                    key={i}
                    title={a.ability.name}
                    bottomDivider={true}
                    titleStyle={{textAlign: "center", fontSize: 20}}
                    leftAvatar={{ source: require("../assets/ability-icon.png") }}
                />))
                }
            </Grid>
          </Content>
          <Fab
            active={false}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: "#00b5ec" }}
            position="bottomRight"
            onPress={() => this.props.setDetailModelVisibility(false)}>
            <Icon name="close" style={{ color: "#263238"  }}/>
          </Fab>
        </Container>
      </Modal>
    )
  }
}

export default PokemonDetailsMap