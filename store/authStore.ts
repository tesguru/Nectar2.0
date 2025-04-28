import { useApiMutation } from './../queryhandler/useMutation';
import { create } from "zustand";
import useSecureAsyncStorage from "@/hooks/useAsyncStorage";
import { useEffect } from "react";
const secretKey: string = "SupersecretKey";

interface User{
    email: string;
    username: string;
}
interface UserState {
    user?: User;
    setUser: (newUser: User) => void; 
}

// Create Zustand Store
const useAuthStore = create<UserState>((set) => ({
    user: { email: "", username: "" }, // Default empty user object
    setUser: (newUser) => {
        set({ user: newUser }); // Correctly update the state
    },
}));

// Function to sync Zustand with Secure Async Storage
export function useSyncAuthStorage() {
    const { storedValue, setValue } = useSecureAsyncStorage("userData", {}, secretKey);
    const setUser = useAuthStore((state) => state.setUser);

    // Load stored user data into Zustand on mount
    useEffect(() => {
        if (storedValue) {
            setUser(storedValue);
        }
    }, [storedValue]);

    // Update AsyncStorage whenever Zustand state changes
    useEffect(() => {
        useAuthStore.subscribe((state) => {
            setValue(state.user);
        });
    }, []);

    return null;
}


export default useAuthStore;
