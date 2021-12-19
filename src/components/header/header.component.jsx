import React from "react";
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>

        {console.log('header: ' + currentUser)}

        <div className="options">
            <Link className="option" to='/shop'> Shop </Link>
            <Link className="option" to='/shop'> Contact </Link>
            {currentUser ?
                <div href="" className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to='/sign-in'> Sign In </Link>}


        </div>
    </div>
)

export default Header;