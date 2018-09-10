import React from 'react';
import './HeaderComponent.scss';
import mainLogo from './ostk_profe_logo.png';
import history from '../../history';

const HeaderComponent = () => (
    <header id="HeaderWrap">
        <div className="mainLogoWrap">
            <a onClick={() => history.push('/')}>
                <img src={mainLogo} className="mainLogo" alt="HearderLogo"/>
            </a>
        </div>
    </header>
);

export default HeaderComponent;
