import React from 'react';
import './Menu.css';
import Logo from '../../assets/images/Logo.png';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} alt='Aluraflix logo' className='Logo' />
            </a>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
            <Button as='a' href='/'>Novo vídeo</Button>
        </nav>
    )
}

export default Menu;