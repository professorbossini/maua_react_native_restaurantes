import React, { useState } from 'react';
import { View, StyleSheet, Picker, TextInput, Slider, Text, Button, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import * as firebase from 'firebase';

import ENV from '../env'

if (!firebase.apps.length)
    firebase.initializeApp(ENV)


const firestore = firebase.firestore();
const storage = firebase.storage();
const database = firebase.database();




const AdicionarRestauranteTela = () => {


    const tirarFoto = async () => {
        let foto = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            base64: true
        })
        setFotoURI(foto.uri)
    }

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [categoria, setCategoria] = useState('Categoria');
    const [preco, setPreco] = useState(1);
    const [fotoURI, setFotoURI] = useState();

    return (
        <View
            style={estilos.container}>

            <TextInput
                style={estilos.nomeTextInput}
                placeholder="Nome do restaurante"
                onChangeText={(texto) => setNome(texto)}
                value={nome} />
            <View
                style={estilos.cidadeECategoriaView}>

                <TextInput
                    style={estilos.cidadeTextInput}
                    placeholder="Cidade"
                    onChangeText={(texto) => setCidade(texto)}
                    value={cidade}
                />

                <Picker
                    selectedValue={categoria}
                    style={estilos.categoriaPicker}
                    onValueChange={(value, index) => setCategoria(value)}
                    mode="dropdown">
                    <Picker.Item label="Categoria" value="Categoria" />
                    <Picker.Item label="Japonês" value="Japonês" />
                    <Picker.Item label="Brasileiro" value="Brasileiro" />
                </Picker>

            </View>

            <View
                style={estilos.precoView}>
                <Text>Preço</Text>
                <Slider
                    style={estilos.precoSlider}
                    minimumValue={1}
                    maximumValue={5}
                    value={preco}
                    step={1}
                    onValueChange={(value) => setPreco(value)}
                />
            </View>

            <View
                style={estilos.previewImageView}>
                {
                    fotoURI ?
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: fotoURI }}
                        /> :
                        <Text>Sem foto.</Text>
                }
            </View>

            <View
                style={estilos.tirarFotoButton}>
                <Button
                    title="Selecionar foto"
                    onPress={() => tirarFoto()} />

            </View>

            <TouchableOpacity
                style={estilos.fab}
            >
                <Text
                    style={estilos.iconeFab}
                >OK</Text>
            </TouchableOpacity>

        </View>
    );

}

const estilos = StyleSheet.create({
    iconeFab: {
        fontSize: 14,
        color: 'white'
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    tirarFotoButton: {
        width: '90%',
        alignSelf: 'center'
    },
    previewImageView: {
        alignSelf: 'center',
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderColor: '#CCC',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    precoSlider: {
        width: '95%',
        marginVertical: 8
    },
    precoView: {
        marginVertical: 8,
        alignItems: 'center'
    },
    categoriaPicker: {
        width: '40%'
    },
    cidadeECategoriaView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8
    },
    nomeTextInput: {
        width: '90%',
        textAlign: 'center',
        padding: 4,
        fontSize: 16,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        marginVertical: 8,
        alignSelf: 'center'
    },
    container: {
        flex: 1
    }
});
export default AdicionarRestauranteTela;