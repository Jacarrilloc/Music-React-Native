import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlbumImage = () => {
    const [heartFilled, setHeartFilled] = useState(false);

    const handleHeartPress = () => {
        setHeartFilled(!heartFilled);
    };

    const handlePlusPress = () => {
        // Lógica para manejar el evento de clic en el signo +
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/albun.jpg')}
                style={styles.albumCover}
            />
            <TouchableOpacity style={styles.heartIcon} onPress={handleHeartPress}>
                <Icon name={heartFilled ? 'heart' : 'heart-o'} size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusIcon} onPress={handlePlusPress}>
                <Icon name="plus" size={25} color="white" />
            </TouchableOpacity>
            <View style={styles.textItem}>
                <Text style={styles.text}>0:17</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 350,
        height: 350,
        borderRadius: 20,
    },
    heartIcon: {
        position: 'absolute',
        top: 20,
        right: 50,
    },
    plusIcon: {
        position: 'absolute',
        bottom: 20,
        left: 50,
    },
    textItem: {
        position: 'absolute',
        bottom: 20,
        right: 50,
    },
    text: {
        color: 'white', 
        fontWeight: 'bold', 
    },
});

export default AlbumImage;
