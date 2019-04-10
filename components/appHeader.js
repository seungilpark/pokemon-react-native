import React, {Component} from "react"
import { Header } from "react-native-elements"

class AppHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#263238"
        height= {100}
        centerComponent={
          { text: "POKEDEX",
            style: {
              color: "#fff",
              fontSize: 22
            }
          }
        }
      />
    )
  }
}

export default AppHeader