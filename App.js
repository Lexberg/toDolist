import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
      
    });
  };

  const cancelInput = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
      visible={isAddMode} 
      onAddGoal={addGoalHandler} 
      onCancel={cancelInput}/>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
          />
          
      {/* <View style={{ padding: 50, flexDirection: 'row'}}>
       <View 
         style={{
          backgroundColor:'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <Text>1</Text>
       </View>
       <View 
         style={{
           backgroundColor:'blue',
           width: 100,
           height: 100,
           justifyContent: 'center',
           alignItems: 'center'
       }}>
           <Text>2</Text>
       </View>
       <View 
        style={{
          backgroundColor:'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <Text>3</Text>
      </View>
       </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 65
  },
});
