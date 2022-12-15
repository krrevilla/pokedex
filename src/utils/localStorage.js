import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const storageKeys = {
    userPreferredLanguage: 'userPreferredLanguage',
    authToken: 'authToken'
};

/**
 * Sets local storage data
 * @param {String} key
 * @param {String} value
 * @returns {void}
 */
export const setLocalStorage = (key, value) => {
    storage.set(key, value);
};

/**
 * Gets local storage data
 * @param {String} key
 * @param {String} value
 * @returns {String}
 */
export const getLocalStorage = (key) => {
    return storage.getString(key);
};

/**
 * Remove local storage key
 * @param {String} key
 * @returns {void}
 */
export const removeLocalStorage = (key) => {
    storage.delete(key);
};
