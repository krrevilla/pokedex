/* eslint-disable react/display-name */
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import { Navigation } from 'react-native-navigation';

import { ROUTES } from './config/constants';
import { Favorites, Pokedex, Pokemon } from './containers';
import { queryClient } from './utils/api';
import { storage } from './utils/localStorage';
import { colors } from './utils/styles';

if (__DEV__) {
    initializeMMKVFlipper({ default: storage });

    import('react-query-native-devtools').then(({ addPlugin }) => {
        addPlugin({ queryClient });
    });
}

function registerScreen(route, Screen) {
    Navigation.registerComponent(
        route,
        () => (props) => (
            <QueryClientProvider client={queryClient}>
                <Screen {...props} />
            </QueryClientProvider>
        ),
        () => Screen
    );
}

function registerScreens() {
    registerScreen(ROUTES.pokedex, Pokedex);
    registerScreen(ROUTES.pokemon, Pokemon);
    registerScreen(ROUTES.favorites, Favorites);
}

function getComponent(name, title) {
    return {
        component: {
            name,
            options: {
                topBar: {
                    background: {
                        color: colors.xiketic
                    },
                    title: {
                        text: title,
                        color: colors.white,
                        fontWeight: 'bold'
                    },
                },
                bottomTab: {
                    testID: name,
                    text: title,
                    selectedTextColor: colors.white,
                    textColor: colors.white,
                }
            },
        },
    };
}

export function startApp() {
    registerScreens();
    Navigation.setDefaultOptions({
        topBar: {
            background: {
                color: colors.xiketic
            },
            title: {
                color: colors.white,
                fontWeight: 'bold'
            },
        },
        bottomTabs: {
            backgroundColor: colors.xiketic,
        },
    });

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                children: [
                                    getComponent(ROUTES.pokedex, 'Pokedex'),
                                ],
                            },
                        },
                        {
                            stack: {
                                children: [
                                    getComponent(ROUTES.favorites, 'Favorites'),
                                ],
                            },
                        }
                    ],
                }
            }
        });
    });
}
