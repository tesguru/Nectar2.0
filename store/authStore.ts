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


const useAuthStore = create<UserState>((set) => ({
    user: { email: "", username: "" }, 
    setUser: (newUser) => {
        set({ user: newUser }); 
    },
}));


export function useSyncAuthStorage() {
    const { storedValue, setValue } = useSecureAsyncStorage("userData", {}, secretKey);
    const setUser = useAuthStore((state) => state.setUser);

   
    useEffect(() => {
        if (storedValue) {
            setUser(storedValue);
        }
    }, [storedValue]);


    useEffect(() => {
        useAuthStore.subscribe((state) => {
            setValue(state.user);
        });
    }, []);

    return null;
}


export default useAuthStore;
