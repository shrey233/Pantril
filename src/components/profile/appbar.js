import React from 'react';
import { AppBar } from 'react-admin';
import MyUserMenu from './MyUserMenu';

const MyAppBar = props => <AppBar {...props} user Menu={<MyUserMenu />} />;
export default MyAppBar;
