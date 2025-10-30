import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // const location = useLocation();
    // const navigate = useNavigate();

    // google signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // authentication state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    // Google Signin
    const googleSignIn = () => {
        setLoading(true);
        // console.log(state);
        return signInWithPopup(auth, googleProvider);
        // return navigate(`${state? state : '/'}`);
    }

    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update Profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }

    const authData = {
        user,
        setUser,
        createUser,
        // googleSignIn,
        auth,
        googleProvider,
        login,
        logOut,
        loading,
        setLoading,
        updateUser
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;