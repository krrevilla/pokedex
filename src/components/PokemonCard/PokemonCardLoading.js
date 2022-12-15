import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '~/utils/styles';

function PokemonCardLoading() {

    return (
        <View style={styles.container} testID='pokemonCardLoading'>
            <View style={styles.cardContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginTop: 8,
        padding: 8,
    },
    cardContainer: {
        backgroundColor: colors.lightBlue,
        padding: 8,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80
    },
});

export default React.memo(PokemonCardLoading);
