import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';

function UserDetails() {
    const context = useContext(myContext);
    const { currentUser } = context;
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        if (currentUser) {
            setUserName(currentUser.displayName || 'User');
            setUserEmail(currentUser.email);
        }
    }, [currentUser]);

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-xl font-bold">
               Welcome,{userName} 
            </div>
            <div className="text-white">
                {userEmail ? `Email: ${userEmail}` : 'Loading...'}
            </div>
        </nav>
    );
}

export default UserDetails;
