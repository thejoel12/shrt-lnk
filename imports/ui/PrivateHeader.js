import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    return (
        <div> 
             <h1>{props.title}</h1>
             <button onClick={() => {
                 Accounts.logout();
             }}>Logout </button>
         </div>
    )
};

export default PrivateHeader;
