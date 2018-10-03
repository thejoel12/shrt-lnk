import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from '../ui/LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
    return (
    <div> 
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>          
    </div> 
    );
};

// export default class Link extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   this.goBack = this.goBack.bind(this); // i think you are missing this
//   // }
    
// }