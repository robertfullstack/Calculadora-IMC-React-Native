import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import ResultImc from "./resulForm/index";



export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)

    const [messageImc, setMessageImc] = useState("Aguardando Valores...")

    const [imc, setImc] = useState(null)

    const [textButton, setTextButton] = useState("Calcular")


    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }


    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual a:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("PREENCHA COM OS DADOS!")
    }


    return (
        <View>
            <View>

                <Text style={styles.titleH1}>Calculadora de IMC</Text>

                <Text style={styles.textInput}>Altura :</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex: 1.75" keyboardType="numeric" style={styles.input} />

                <Text style={styles.textInput}>Peso :</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Ex: 75" keyboardType="numeric" style={styles.input} />

                <TouchableOpacity onPress={() => { validationImc() }} style={styles.buttonSend}>
                    <Text>{textButton}</Text>
                </TouchableOpacity>

            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleH1: {
        fontSize: '20px',
        margin: '20px'
    },

    textInput: {
        fontSize: '20px'
    },

    input: {
        padding: '3px',
        border: '1px solid black'
    },

    buttonSend: {
        backgroundColor: 'rgb(33, 150, 243)',
        width: '215px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    }
});
