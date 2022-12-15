import { QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';
import React from 'react';

import { queryClient } from '~/utils/api';

import { usePokemonDetails, usePokemonList } from './pokemon';

const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('Testing fetching list of pokemons and pokemon data', () => {
    it('Fetches Pokemon List', async () => {
        const { result } = renderHook(() => usePokemonList(), { wrapper });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toBeDefined();
    });

    it('Fetches Pokemon Data', async () => {
        const { result } = renderHook(() => usePokemonDetails('bulbasaur'), { wrapper });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toBeDefined();
        expect(result.current.data.name).toBe('bulbasaur');
    });
});
