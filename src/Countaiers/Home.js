import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <div>
            <header>
                <nav>
                    <div><h2>LOGO</h2></div>
                    <ul>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/About'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/Contect'>CONTECT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>HOME PAGE</h1>
            </section>
        </div>
    );
}

export default Home;