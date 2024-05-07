import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnterdGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnterdGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnterdGoalText('')
        console.log('addGoalHandler')
        return(
            <View style={StyleSheet.inputContainer}>
                <TextInput
                style={StyleSheet.textInput}
                placeholder="Your Goal!"
                onChangeText={handleInputGoal}
                value={enteredGoalText}
                />
                <Button
                title="Add Goal"
                color={'#A3FFD6'}
                onPress={addGoalHandler}
                />
            </View>
        )
    }
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomColor: '#7C9FF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    },
})