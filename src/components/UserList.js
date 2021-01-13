import React from 'react';
import useResource from './useResources';

const UserList = () => {
    const users = useResource('users');
    return (
        <ul>
            {users.map(user => {
                return <li key={user.id}>
                    {user.name}
                </li>
            })}
        </ul>
    );
};

export default UserList;