import React from 'react';
import './NavBar.css';
import CartWidget from '../CarWidget/CarWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoStrombo' src={"./Img/logoLocal.png"} alt="logo Strombo" />
      </Link>
      
      <nav>
        <ul>
          <li>
            <NavLink to="/"><button>INICIO</button></NavLink>
          </li>
          <li>
            <NavLink to="/categoria/remeras"><button>REMERAS</button></NavLink>
          </li>

          <li>
            <NavLink to="/categoria/buzos"><button>BUZOS</button></NavLink>
          </li>

          <li>
            <NavLink to="/categoria/camperas"><button>CAMPERAS</button></NavLink>
          </li>

          <li>
            <NavLink to="/categoria/discos"><button>DISCOS</button></NavLink>
          </li>

        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;