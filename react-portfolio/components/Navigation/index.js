import React from 'react';

const Navigation = () => {
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"></span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className='mx-2'>
                        <a href="#Projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;