import { Button, TextInput, View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import CryptoJs from "crypto-js";

function useSecureAsyncStorage(key: any, initialValue: any, secret: any) {
    const [storedValue, setStoredValue] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const encryptData = (data: any) => {
        try {
            const stringData = JSON.stringify(data);
            return CryptoJs.AES.encrypt(stringData, secret).toString();
        } catch (err: any) {
            throw new Error(`Encryption failed: ${err.message}`);
        }
    };

    const decryptData = (encryptedText: any) => {
        try {
            const bytes = CryptoJs.AES.decrypt(encryptedText, secret);
            const decryptedText = bytes.toString(CryptoJs.enc.Utf8);
            return JSON.parse(decryptedText);
        } catch (err: any) {
            throw new Error(`Decryption failed: ${err.message}`);
        }
    };

    useEffect(() => {
        async function loadData() {
            try {
                const item = await AsyncStorage.getItem(key);
                if (item !== null) {
                    const decrypted = decryptData(item);
                    setStoredValue(decrypted);
                } else {
                    
                    setStoredValue(initialValue);
                }
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [key]);

    const setValue = async (value: any) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            setStoredValue(newValue);
            const encryptedValue = encryptData(newValue);
            await AsyncStorage.setItem(key, encryptedValue);
        } catch (err: any) {
            setError(err);
        }
    };

    return { storedValue, setValue, loading, error };
}

export default useSecureAsyncStorage;

