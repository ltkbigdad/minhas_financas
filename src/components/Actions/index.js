import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesigned} from '@expo/vector-icons'

export default function Actions() {
 return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                
            </View>

        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {

    }
})