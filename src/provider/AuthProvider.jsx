import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // google signup
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // authentication state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }

    const authData = {
        user,
        setUser,
        createUser,
        login,
        logOut,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;