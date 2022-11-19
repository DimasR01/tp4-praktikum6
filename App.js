import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    namaku : "Raden Dimas Ronggo Sayhputro"
  }

  change = () => {
    this.setState({
      namaku : "1202200079"
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.change}
        >
         <Text>Pencet</Text>
        </TouchableOpacity>
        <View>
          <Text>
           { this.state.namaku }
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;