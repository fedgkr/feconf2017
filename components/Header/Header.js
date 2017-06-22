import React from 'react';
import {Icon} from 'semantic-ui-react';

function onClickToggle() {
    const elNav = document.querySelector('.header__navigation');
    const isShown = elNav.classList.contains('show');

    elNav.classList[isShown ? 'remove' : 'add']('show');
}

const Header = () => (
    <header className="header">
        <div className="header__inner">
            <div className="header__logo">
                <h1 className="header__title">
                    <a href="/">FEConf.kr</a>
                </h1>
            </div>
            <div className="header__control">
                <button className="header__btn-toggle" onClick={onClickToggle}>
                    <Icon name="bars"/>
                    <span className="blind">메뉴</span>
                </button>
            </div>
            <nav className="header__navigation">
                <a href="/#speakers" className="header__nav-link">Speakers</a>
                <a href="/#schedule" className="header__nav-link">Schedule</a>
                <a href="/#location" className="header__nav-link">Location</a>
                <a href="/#sponsors" className="header__nav-link">Sponsors</a>
                <a href="/#about"    className="header__nav-link">About</a>
            </nav>
        </div>
    </header>
);

export default Header;
