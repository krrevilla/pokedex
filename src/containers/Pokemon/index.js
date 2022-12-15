import PropTypes from 'prop-types';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import { usePokemonDetails } from '~/hooks/pokemon';
import { colors } from '~/utils/styles';

import Header from './Header';

function PokeDetails(props) {
    const { data } = usePokemonDetails(props.name);

    return (
        <SafeAreaView style={styles.container} testID='pokemon'>
            <Header
                componentId={props.componentId}
                name={props.name} />
            <View>
                <Image source={{ uri: data.sprites.other['official-artwork'].front_default }} style={styles.image} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.xiketic,
    },
    image: {
        height: 100,
        width: 100
    }
});

PokeDetails.propTypes = {
    componentId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default React.memo(PokeDetails);
