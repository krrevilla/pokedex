import create from 'zustand';

export const usePokemonFavorites = create((set) => ({
    favorites: [],
    addFavorite: (name) => set((state) => ({
        favorites: [...state.favorites, name]
    })),
    removeFavorite: (name) => set((state) => ({
        favorites: state.favorites.filter(favorite => favorite !== name)
    })),
    clearFavorites: () => set(() => ({ favorites: [] }))
}));
