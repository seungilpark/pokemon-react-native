import React, {Component} from "react"
import { Header } from "react-native-elements"

class AppHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#00b5ec"
        height= {100}
        centerComponent={
          { text: "Pokémon Dex",
            style: {
              fontSize: 22,
              bottom: "50%",
              fontWeight: "bold",
            }
          }
        }
      />
    )
  }
}

export default AppHeader