import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
    const [isLogged,setLogged] = useState(false);
    const [user,setUser] = useState({});
    return ( 
        <AuthContext.Provider value={{isLogged,setLogged,user,setUser}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;