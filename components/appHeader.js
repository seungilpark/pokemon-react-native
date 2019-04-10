import React, {Component} from "react"
import { Header } from "react-native-elements"

class AppHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#263238"
        height= {200}
        centerComponent={
          { text: "Pokémon Dex",
            style: {
              fontSize: 22,
              bottom: "50%",
              fontWeight: "bold",
              color: "#fff"
            }
          }
        }
      />
    )
  }
}

export default AppHeader