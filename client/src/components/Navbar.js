import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [isShown, setShown] = useState(false);
    let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src="https://www.netclipart.com/pp/m/237-2377532_lecture-icon-study-book-icon-png.png" style={{width: "40px"}}/>
                BookFuzz
            </Link>
            <button onClick={() => setShown(!isShown)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={showClass} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search
                        </Link>
                    </li>          
                    <li className="nav-item">
                        <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                        </Link>
                    </li>    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
