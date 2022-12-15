import { render, screen } from '@testing-library/react-native';
import React from 'react';

import PokemonCard from '.';
import PokemonCardLoading from './PokemonCardLoading';

const id = 1;
const name = 'Charmander';
const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png';
const types = [{ slot: 1, type: { name: 'Fire', url: 'https://pokeapi.co/api/v2/type/10/' } }];

describe('Tests Pokemon Card Loading and Data Card', () => {
    it('Renders Pokemon Card Loading', () => {
        render(<PokemonCardLoading />);

        expect(screen.getByTestId('pokemonCardLoading')).toBeTruthy();
    });

    it('Renders Pokemon Card Data', () => {
        render(<PokemonCard id={id} name={name} image={image} types={types} />);

        const component = screen.getByTestId(`pokemonCard-${id}`);
        const nameComponent = screen.getByText(name);
        const imageComponent = screen.getByTestId(`pokemonCardImage-${id}`);
        const typeComponent = screen.getByText(types[0].type.name);

        expect(component).toBeTruthy();
        expect(nameComponent).toBeTruthy();
        expect(imageComponent.props.source.uri).toEqual(image);
        expect(typeComponent).toBeTruthy();
    });
});
