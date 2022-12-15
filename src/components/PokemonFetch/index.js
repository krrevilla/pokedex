import PropTypes from 'prop-types';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { PokemonCard, PokemonCardLoading } from '~/components';
import { usePokemonDetails } from '~/hooks/pokemon';

function PokemonFetch({ name, onPress }) {
    const { data, isLoading } = usePokemonDetails(name);

    const onCardPress = () => {
        onPress(data);
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <PokemonCardLoading />
            </View>
        );
    }

    return (
        <Pressable onPress={onCardPress} style={styles.container}>
            <PokemonCard
                id={data.id}
                name={data.name}
                image={data.sprites.other['official-artwork'].front_default}
                types={data.types?.slice(0, 1)}
                isLoading={isLoading} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

PokemonFetch.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default React.memo(PokemonFetch);
