import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from "./Card.styles"

const Card = (props) => {
    const disabled = props.value === "" ? true : false;
    return (
        <View style={styles.cardContainer}>
            <TextInput
                placeholder='Yapılacak...'
                value={props.value}
                onChangeText={props.onChangeText}
            />

            <TouchableOpacity
                disabled={disabled}
                style={props.value.length > 0 ? [styles.saveBtn, styles.saveButtonActive] : [styles.saveBtn, styles.saveButton]}
                onPress={props.onPress}>
                <Text style={styles.saveText}>KAYDET</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card

