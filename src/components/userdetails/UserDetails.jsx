import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';


function UserDetails() {
    const context = useContext(myContext);
    const { currentUser } = context;
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (currentUser) {
            setUserName(currentUser.displayName || currentUser.email);
        }
    }, [currentUser]);

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-xl font-bold">MyApp</div>
            <div className="text-white">
                {userName ? `Hello, ${userName}` : 'Loading...'}
            </div>
        </nav>
    );
}

export default UserDetails;
