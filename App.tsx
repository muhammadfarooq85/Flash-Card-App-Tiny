import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

type FlashCardTypes = {
  question: string;
  answer: string;
};

const flashcards: FlashCardTypes[] = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: '2 + 2 = ?', answer: '4' },
  { question: 'What color is the sky?', answer: 'Blue' },
];

function App() {
  const [index, setIndex] = React.useState<number>(0);
  const [showAnswer, setShowAnswer] = React.useState<boolean>(false);

  const handleNext = () => {
    setIndex(prev => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.viewText}>Flip the card to view the answer.</Text>
      <Card style={styles.card} onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.cardText}>
          {showAnswer ? flashcards[index].answer : flashcards[index].question}
        </Text>
      </Card>
      <Button onPress={handleNext} mode="contained">
        Goto Next Question
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    width: 300,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    padding: 20,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
