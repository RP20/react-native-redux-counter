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
        <Text style={styles.countText}>
          {this.props.count}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.incrementCounter}>
            <Text style={styles.countText}>+</Text>
          </TouchableOpacity>
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
    fontSize: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

var mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

module.exports = connect(mapStateToProps)(Main);
