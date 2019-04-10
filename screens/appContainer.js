import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {ActionCreators} from "../actions"
import HomeContainer from "./homeContainer"


class DexContainer extends Component {
  render() {
    return <HomeContainer {...this.props}/>
  }
}

function mapDispatchToProps(dispatch) {
  console.log("hello");
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {}
}, mapDispatchToProps)(DexContainer)