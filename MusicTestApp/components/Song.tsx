import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SongScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const songProgress = 0.5; // Ejemplo: progreso del 50%

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/albun.jpg')}
                style={styles.albumCover}
            />
            <Text style={styles.songName}>Song Name</Text>
            <Text>Album Name</Text>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={songProgress}
                style={styles.progressBar}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                            style={styles.iconButton}
                    onPress={() => console.log("Back pressed")}
                >
                    <Icon name="backward" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.playPauseButton}
                    onPress={() => setIsPlaying(!isPlaying)}
                >
                    <Icon
                        name={isPlaying ? 'pause' : 'play'}
                        size={50}
                        color="black"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => console.log("Next pressed")}
                >
                    <Icon name="forward" size={30} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    albumCover: {
        width: 300,
        height: 300,
        marginBottom: 10,
        borderRadius: 20,
    },
    songName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressBar: {
        width: 300,
        height: 10,
        marginTop: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    iconButton: {
        margin:20
    },
    playPauseButton: {
        margin:15
    },
    
});

export default SongScreen;
