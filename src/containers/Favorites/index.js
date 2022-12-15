import { FlashList } from '@shopify/flash-list';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { PokemonFetch } from '~/components';
import { ROUTES } from '~/config/constants';
import { usePokemonFavorites } from '~/hooks/zustand';
import { colors } from '~/utils/styles';

const keyExtractor = (item) => item;

function Favorites(props) {
    const data = usePokemonFavorites((state) => state.favorites);

    const onNavigate = useCallback((pokemon) => {
        Navigation.push(props.componentId, {
            component: {
                id: ROUTES.pokemon,
                name: ROUTES.pokemon,
                passProps: {
                    name: pokemon.name
                },
                options: {
                    topBar: {
                        visible: false
                    }
                }
            }
        });
    }, [props.componentId]);

    const renderItem = useCallback(({ item }) => {
        return <PokemonFetch name={item} onPress={onNavigate} />;
    }, [onNavigate]);

    return (
        <View style={styles.container} testID='pokemonFavorites'>
            <View style={styles.listContainer}>
                <FlashList
                    keyExtractor={keyExtractor}
                    data={data}
                    renderItem={renderItem}
                    estimatedItemSize={88}
                    numColumns={2} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.xiketic,
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
});

Favorites.propTypes = {
    componentId: PropTypes.string.isRequired
};

export default React.memo(Favorites);
