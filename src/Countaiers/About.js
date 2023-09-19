import React from 'react';
import { Link } from 'react-router-dom';


function About(props) {
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
                            <Link to='/'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/Contect'>CONTECT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>ABOUT PAGE</h1>
            </section>
        </div>
    );
}

export default About;