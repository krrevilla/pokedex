import { getLocalStorage, removeLocalStorage, setLocalStorage } from './localStorage';

describe('MMKV', () => {
    it('Successful set and get in localStorage', () => {
        setLocalStorage('test', 'testing');

        const value = getLocalStorage('test');

        expect(value).toBe('testing');
    });

    it('Successful removing in localStorage', () => {
        removeLocalStorage('test');

        const value = getLocalStorage('test');

        expect(value).toBeUndefined();
    });
});
