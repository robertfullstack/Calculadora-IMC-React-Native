import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc(props) {
    return (
        <View>
            <Text style={styles.text}>{props.messageResultImc}</Text>
            <Text style={styles.text}>{props.resultImc}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: '17px'
    }
})