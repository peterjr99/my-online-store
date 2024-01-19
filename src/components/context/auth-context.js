import React, {useState, useEffect} from 'react';
import {createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
        signOut, 
        onAuthStateChanged} from 'firebase/auth'
 import { auth } from '../../api/firebase';       


const UserContext = React.createContext({
    loading:true,
    user:{},
    createUser:(email, pasword) => {},
    logout:() => {},
    signIn:() => {}

})




export const AuthContextProvider = ({children}) => {
   const [user, setUser] = useState({})
   const [loading, setLoading] = useState(false);

   function createUser(email, password){
   return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logout = () => {
    return signOut(auth)
   }
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        console.log(user)
        setUser(currentUser)
        setLoading(false)
       })
       return () => { 
       unsubscribe();
       }
},  []);
   

    return <UserContext.Provider
    value={{
       logout,
       createUser,
       user,
       signIn,
       loading
    }}
    >{children}</UserContext.Provider>
}

export default UserContext