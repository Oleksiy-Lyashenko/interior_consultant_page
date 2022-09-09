import Nav from './Nav';
import { MdArrowRightAlt } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';

import BackgroundImg from './assets/photo1.png';
import CommentLogo from './assets/photo2.png';
import BurgerMenuIcon from './assets/burger-menu.svg';

import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="page">
      <div className="wrapper">
        <header className="header" hidden>
          <div className="logo-block">
            <a href="/" className="logo">
              This Interior
            </a>
          </div>

          <Nav />

          <div className="burger-menu" onClick={() => setOpenMenu(true)}>
            <img src={BurgerMenuIcon} alt="" className="burger-menu__style" />
          </div>
        </header>

        {openMenu && (
          <nav className="nav">
            <div className="nav__top">
              <RiCloseFill
                size="40px"
                className="nav__closer"
                color="#fff"
                onClick={() => setOpenMenu(false)}
              />
            </div>

            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Collection
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className="content" hidden>
          <div className="text-block">
            <h1 className="text-block__title">Modern interior</h1>

            <p className="text-block__text">
              A full-Service residential & commercial interior design and staging company offering
              professional organizing & eco-services.
            </p>

            <button className="text-block__button">
              <span className="text-block__button__text">Read more</span>
              <MdArrowRightAlt size="25px" />
            </button>
          </div>

          <div className="img-block">
            <img src={BackgroundImg} alt="" className="img" />

            <div className="comment">
              <div className="comment-block">
                <img src={CommentLogo} alt="" className="comment-block__logo" />

                <div className="comment-block__text">
                  <p className="comment-block__text__name">Aliza Webber</p>
                  <p className="comment-block__text__position">Interior designer</p>
                </div>
              </div>
              <h3 className="comment__text">
                Designed in 2020 by <br /> Aliza Webber
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
