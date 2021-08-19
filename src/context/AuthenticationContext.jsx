import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
    const [isLogged,setLogged] = useState(false);
    const [user,setUser] = useState({});
    const [saved_books,setSavedBooks] = useState([]);
    return ( 
        <AuthContext.Provider value={{isLogged,setLogged,user,setUser,saved_books,setSavedBooks}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;