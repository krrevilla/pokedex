import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import axios from 'axios';

import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

export const apiUrl = 'https://pokeapi.co/api/v2/';

export const endPoints = {
    pokemon: 'pokemon'
};

export const axiosInstance = axios.create({
    baseURL: apiUrl
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            cacheTime: 1000 * 60 * 60 // 1 hour
        }
    }
});

const storageConfig = {
    setItem: setLocalStorage,
    getItem: getLocalStorage,
    removeItem: removeLocalStorage
};

const localStoragePersister = createSyncStoragePersister({ storage: storageConfig });

persistQueryClient({
    queryClient,
    persister: localStoragePersister,
});
