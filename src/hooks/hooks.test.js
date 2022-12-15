import { act, renderHook } from '@testing-library/react-native';

import { usePokemonFavorites } from './zustand';

describe('usePokemonFavorites', () => {
    beforeEach(() => {
        const { result } = renderHook(() => usePokemonFavorites());

        act(() => result.current.clearFavorites());
    });

    it('Add favorite pokemon', () => {
        const { result } = renderHook(() => usePokemonFavorites());

        act(() => result.current.addFavorite('bulbasaur'));

        expect(result.current.favorites).toStrictEqual(['bulbasaur']);
    });

    it('Remove favorite pokemon', () => {
        const { result } = renderHook(() => usePokemonFavorites());

        act(() => {
            result.current.favorites = ['bulbasaur'];
        });

        act(() => result.current.removeFavorite('bulbasaur'));

        expect(result.current.favorites).toStrictEqual([]);
    });

    it('', () => {
        const { result } = renderHook(() => usePokemonFavorites());

        act(() => {
            result.current.favorites = ['bulbasaur'];
        });

        act(() => result.current.clearFavorites());

        expect(result.current.favorites).toStrictEqual([]);
    });
});
