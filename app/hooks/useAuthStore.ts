'use client';

import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";

export const useAuthStore = () => {
    const dispatch = useDispatch();
    const {} = useAppSelector(state => state.auth);

    const startLogin = (user: any) => {
        
    }
}