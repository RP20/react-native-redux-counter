import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions';

var Main = React.createClass ({

  incrementCounter() {
    this.props.dispatch(incrementCounter);
  },

  decrementCounter() {
    this.props.dispatch(decrementCounter);
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {this.props.count}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.incrementCounter}>
            <View style={styles.buttonContainer}>
              <Text style={styles.countText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementCounter}>
            <View style={styles.buttonContainer}>
              <Text style={styles.countText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0D404E'
  },
  countText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  countContainer: {

    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    width: 300,
    //backgroundColor: '#FF5A3C',
    //marginBottom: 50,
    //marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#00DA9D',
    width: 300,
    marginBottom: 20,
    padding: 5
    //height: 100
  }
});

var mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

module.exports = connect(mapStateToProps)(Main);
