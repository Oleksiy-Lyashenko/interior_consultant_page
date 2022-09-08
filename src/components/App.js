import BurgerMenu from './BurgerMenu';
import Nav from './Nav';

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <nav className="nav">
          <div className="logo-block">
            <h3 className="logo">This Interior</h3>
          </div>

          <Nav />
          <BurgerMenu />

        </nav>

        <div className="content">
          <div className="text-block"></div>
          <div className="img-block">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
