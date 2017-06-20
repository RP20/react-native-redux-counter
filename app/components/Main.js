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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.incrementCounter}>
            <Text style={styles.countText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.decrementCounter}>
            <Text style={styles.countText}>-</Text>
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
  },
  countText: {
    fontSize: 100,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    width: 300,
    backgroundColor: 'black',
    marginBottom: 100,
    marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'grey',
    width: 300,
    //height: 100
  }
});

var mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

module.exports = connect(mapStateToProps)(Main);
