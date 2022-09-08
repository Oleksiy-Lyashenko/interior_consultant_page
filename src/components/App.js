import BurgerMenu from './BurgerMenu';
import Nav from './Nav';
import { MdArrowRightAlt } from 'react-icons/md';

import BackgroundImg from './assets/photo1.png';
import CommentLogo from './assets/photo2.png';

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <nav className="nav">
          <div className="logo-block">
            <a href='/' className="logo">This Interior</a>
          </div>

          <Nav />
          <BurgerMenu />
        </nav>

        <div className="content">
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
