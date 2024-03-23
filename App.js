import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [inputGoalText, setInputdGoalText] = useState('')
  const [listOfGoals, setListOfGoals] = useState([])
  
  function goalInputHandler(inputText) {
    setInputdGoalText(inputText)
  }

  function addGoalHandler() {
    setListOfGoals((currentList) => {
      return [...currentList, inputGoalText]
    })
    setInputdGoalText('')
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputText} 
          placeholder='O que você precisa fazer hoje ?'
          onChangeText={goalInputHandler}
          value={inputGoalText}
        />
        <Button 
          title='Add Goal'
          onPress={addGoalHandler} 
        />
      </View>
      <View style={styles.goalsContainer}>
        {listOfGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    borderColor: 'yellow',
    borderWidth: 2,
    flex: 1
  },
  
  goalsContainer: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 5
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 4,
    borderBottomColor: '#d2d2d2',
    flex: 1,
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    marginRight: 8,
    padding: 8
  }
});

