import { createContext,useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup, sendPasswordResetEmail} from 'firebase/auth'
import {auth} from './firebase'

export const authcof = createContext();

export const useAuth = ()=> {
    const context = useContext(authcof)
    if(!context) throw new Error("There")
    return context
}

export function AuthProvider({children}){
    const [user,setUser] = useState(null)

    const signUp = async (email,password)=> await createUserWithEmailAndPassword(auth,email,password)

    const login = async (email,password)=> await signInWithEmailAndPassword(auth,email,password)
    const logOut  = ()=> signOut(auth)
    const signGoogle =async()=>{
        const googleProvider = new GoogleAuthProvider()
        return await signInWithPopup(auth,googleProvider)
    }
    const reset =async(email)=> await sendPasswordResetEmail(auth,email)
    useEffect(()=>{
            onAuthStateChanged(auth, currenValue=>{
                setUser(currenValue)
            })
        },[])

    return(
        <authcof.Provider value={{signUp,login,signGoogle, user,logOut, reset}}>
            {children}
        </authcof.Provider>
    )
}