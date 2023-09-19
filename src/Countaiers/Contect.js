import React from 'react';
import { Link } from 'react-router-dom';


function Contect(props) {
    return (
        <div>
              <header>
                <nav>
                    <div><h2>LOGO</h2></div>
                    <ul>
                        <li>
                            <Link to='/Home'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/About'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/'>CONTECT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>CONTECT PAGE</h1>
            </section>
        </div>
    );
}

export default Contect;