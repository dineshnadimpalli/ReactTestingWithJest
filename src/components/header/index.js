import React from 'react';
import Logo from '../../assets/graphics/Enquero-Logo.png';
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test='headerComponent'>
            <div className='wrapper'>
                <div className='logo'>
                    <img data-test='logoElement' src={Logo} alt='Logo'/>
                </div>
            </div>
        </header>
    )
}


export default Header;