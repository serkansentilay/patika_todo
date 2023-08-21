import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from "./ListView.styles"

const ListView = (props) => {
    console.log("listvie", props)
    return (
        <Pressable style={props.isDone ? [styles.container, styles.done] : styles.container} onPress={props.done} onLongPress={props.remove}>
            <Text style={props.isDone ? [styles.text, styles.done] : styles.text}>
                {props.title}</Text>
        </Pressable>
    )
}

export default ListView

