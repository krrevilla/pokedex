import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { usePokemonFavorites } from '~/hooks/zustand';
import { colors } from '~/utils/styles';

const getFavorite = (favorites, name) => {
    const exist = favorites.find((favorite) => favorite === name);

    return !!exist;
};

function Header({ componentId, name }) {
    const { isFavorite, addFavorite, removeFavorite } = usePokemonFavorites((state) => ({
        isFavorite: getFavorite(state.favorites, name),
        addFavorite: state.addFavorite,
        removeFavorite: state.removeFavorite,
    }));

    const onPress = () => {
        isFavorite
            ? removeFavorite(name)
            : addFavorite(name);
    };

    const onBack = () => {
        Navigation.pop(componentId);
    };

    return (
        <View style={styles.container}>
            <Icon
                onPress={onBack}
                name='chevron-left'
                size={25}
                color='#fff' />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity onPress={onPress} testID='pokemonFavoriteToggle'>
                <Icon
                    testID={isFavorite ? 'pokemonFavorite' : 'pokemonNotFavorite'}
                    name={isFavorite ? 'heart' : 'heart-o'}
                    size={25}
                    color='#fff' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    name: {
        textTransform: 'capitalize',
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

Header.propTypes = {
    componentId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Header;
