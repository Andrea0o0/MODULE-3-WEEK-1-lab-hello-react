import logo from '../images/ironhack-logo-xs.png';
import hamburguer from '../images/menu-top-xs.png'

const Header = () => {
    return (
        <header className="header">
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='hamburguer'>
                <img src={hamburguer} alt="hamburguer navbar" />
            </div>
        </header>
    );
  }

  export default Header