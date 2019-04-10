import React, {Component} from "react"
import {Image} from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Container, Content, Text, Icon, List, ListItem, Fab } from "native-base"
import  Modal  from "react-native-modal"

class PokemonDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: {},
      weight: "",
      name: "",
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
        abilities: pokemonDetails.abilities
      })
    }
  }

  render() {
    const id = this.state.id
    const name = this.state.name
    const weight = this.state.weight
    const abilities = this.state.abilities
    const image = this.state.images
    return (
      <Modal
        animationType="slide"
        transparent={ false }
        presentationStyle="fullScreen"
        visible={ this.props.visibility }
        onRequestClose={() => this.props.setDetailModelVisibility(false)}>
        <Container>
          <Content>
            <Grid>
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
                  <List>
                    <ListItem itemHeader>
                      <Text>WEIGHT</Text>
                    </ListItem>
                    <ListItem>
                      <Text>{weight}</Text>
                    </ListItem>
                  </List>
                </Col>
                <Col>
                  <List>
                    <ListItem itemHeader>
                      <Text>ABILITIES</Text>
                    </ListItem>
                    {
                      abilities.map((a, i) => (
                        <ListItem key={i}>
                          <Text>
                            {a.ability.name}
                          </Text>
                        </ListItem>))
                    }
                  </List>
                </Col>
              </Row>
            </Grid>
          </Content>
          <Fab
            active={false}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: "#EEAC57" }}
            position="bottomRight"
            onPress={() => this.props.setDetailModelVisibility(false)}>
            <Icon name="close" style={{ color: "#263238"  }}/>
          </Fab>
        </Container>
      </Modal>
    )
  }
}

export default PokemonDetails