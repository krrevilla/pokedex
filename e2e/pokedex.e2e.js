import { ROUTES } from '~/config/constants';

/* eslint-disable no-undef */
describe('Pokedex', () => {
    beforeAll(async () => {
        await device.launchApp({
            launchArgs: {
                detoxURLBlacklistRegex: '(".*raw.githubusercontent.com/PokeAPI/sprites/.*")',
            },
        });
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('Should display list of pokemon', async () => {
        await expect(element(by.id('pokedex'))).toExist();
    });

    it('Should navigate to Pokemon detail page from Pokedex page', async () => {
        await element(by.id('pokemonCard-1')).tap();
        await expect(element(by.id('pokemon'))).toExist();
    });
});

describe('Pokemon Favorite', () => {
    it('Should toggle favorite Pokemon', async () => {
        await element(by.id('pokemonFavoriteToggle')).tap();
        await expect(element(by.id('pokemonFavorite'))).toExist();
        await element(by.id('pokemonFavoriteToggle')).tap();
        await expect(element(by.id('pokemonNotFavorite'))).toExist();
    });

    it('Should navigate to Favorites page', async () => {
        await element(by.id('pokemonFavoriteToggle')).tap();

        await element(by.id(ROUTES.favorites)).tap();
        await expect(element(by.id('pokemonFavorites'))).toBeVisible();
        await expect(element(by.id('pokemonCard-1'))).toExist();
    });

    it('Should navigate to Pokemon page from Favorites page', async () => {
        await element(by.id('pokemonCard-1')).tap();
        await expect(element(by.id('pokemon'))).toExist();
    });
});
