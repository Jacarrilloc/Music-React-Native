import React, { useState } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SongScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const songProgress = 0.2;

    return (
        
        <View style={styles.container}>
            <View style={styles.contentContainer}>
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
                    >
                        <Icon name="backward" size={30} color="#442e4d" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.playPauseButton}
                        onPress={() => setIsPlaying(!isPlaying)}
                    >
                        <Icon
                            name={isPlaying ? 'pause' : 'play'}
                            size={50} // Aumenta el tamaño del icono
                            color="white"
                            style={styles.playPauseIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                    >
                        <Icon name="forward" size={30} color="#442e4d" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 10,
        width: '100%',
        height: '60%'
    },
    albunContainer: {
        width: '100%',
        alignItems: 'center',  
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:150,
        width: '100%'
    },
    songName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    progressBar: {
        width: 340,
        height: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    iconButton: {
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
    },
    playPauseButton: {
        width: 90, 
        height: 90, 
        backgroundColor: '#442e4d',
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center', // Alinea el icono en el centro verticalmente
        overflow: 'hidden',
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5, 
        shadowRadius: 4, 
        elevation: 5, 
    },
    playPauseIcon: {
        margin: 1,
    },
});

export default SongScreen;
