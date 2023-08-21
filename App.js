import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ListView from './src/components/ListView'
import Card from './src/components/Card/Card'

const App = () => {
  const [newYapilacak, setNewYapilacak] = useState("")
  const [Lists, setLists] = useState([])

  const renderYapilacak = ({ item, index }) => <ListView
    title={item.title}
    remove={() => handleRemove(item.id)}
    done={() => handleDone(item.id)}
    isDone={item.isDone}
  />

  const handleYapilacak = () => {
    setLists([...Lists, { title: newYapilacak, isDone: false, id: Date.now() }])
    setNewYapilacak("")
  }

  const handleDone = (id) => {
    const willDone = [...Lists]
    const Findedindex = willDone.findIndex(item => item.id === id)
    willDone[Findedindex].isDone = !willDone[Findedindex].isDone
    setLists(willDone)
  }

  const handleRemove = (id) => {
    const willRemove = [...Lists]
    const findedIndex = willRemove.findIndex(item => item.id === id)
    willRemove.splice(findedIndex, 1)
    setLists(willRemove)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBlock}>
        <Text style={styles.topText}>YAPILACAKLAR </Text>
        <Text style={styles.topText}>{Lists.filter(todo => !todo.isDone).length}</Text>
      </View>
      <View style={styles.center}>
        <FlatList
          data={Lists}
          renderItem={renderYapilacak}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <Card value={newYapilacak} onChangeText={setNewYapilacak} onPress={handleYapilacak} />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: 'steelblue',
    flex: 1,
  },
  topBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  topText: {
    fontSize: 25,
    color: 'gold',
    fontWeight: 'bold'
  },
  center: {
    flex: 1
  },

})