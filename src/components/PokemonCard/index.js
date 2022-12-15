import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { pokemonTypesType } from '~/config/types';
import { colors, hexAlpha } from '~/utils/styles';

function PokemonCard({ id, name, image, types }) {
    return (
        <View style={styles.container} testID={`pokemonCard-${id}`}>
            <View style={styles.cardContainer}>
                <FastImage
                    testID={`pokemonCardImage-${id}`}
                    source={{ uri: image }}
                    style={styles.image} />
                <View style={styles.details}>
                    <Text testID={`pokemonCardName-${id}`} numberOfLines={1} adjustsFontSizeToFit={true} style={styles.name}>{name}</Text>
                    <View style={styles.typesContainer}>
                        {types.map((item, index) => (
                            <View key={index} style={styles.typeContainer}>
                                <Text testID={`pokemonCardType-${id}`} style={styles.type}>
                                    {item.type.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        height: 80,
        marginBottom: 8
    },
    cardContainer: {
        backgroundColor: colors.lightBlue,
        padding: 8,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80
    },
    image: {
        width: 65,
        height: 65,
    },
    details: {
        flex: 1,
        marginLeft: 2,
    },
    name: {
        textTransform: 'capitalize',
        color: colors.midnightBlue,
        fontSize: 16,
        fontWeight: '600'
    },
    typesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    typeContainer: {
        backgroundColor: colors.black + hexAlpha[20],
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginTop: 2,
        marginLeft: 2
    },
    type: {
        fontSize: 12,
    }
});

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape(pokemonTypesType)).isRequired,
};

export default React.memo(PokemonCard);
