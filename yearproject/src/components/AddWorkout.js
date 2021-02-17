import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
import {MKTextField, MKColor} from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({

  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },
});

class AddWorkout extends Component {
  onAddPress() {
    const {workout_name} = this.props;

    this.props.createNewWorkout({workout_name});
    this.props.navigation.navigate('WorkoutsHome');
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new Workout</Text>

          <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder={'Workout Name'}
            value={this.props.workout_name}
            onChangeText={(value) =>
              this.props.formUpdate({prop: 'workout_name', value})
            }
          />

          <View style={styles.addButton}>
            <Button title="Add Workout" onPress={this.onAddPress.bind(this)} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const {workout_name} = state;
  return {workout_name};
};

export default connect(mapStateToProps, actions)(AddWorkout);
