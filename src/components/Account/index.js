import React, { createContext, useState } from 'react';

const AccountContext = createContext();

const Account = (props) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AccountContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export { Account, AccountContext };
