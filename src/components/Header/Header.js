import {withRouter, Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>
                Kepler Ridge
            </h1>
            <nav>
                <Link id='web-link' to='/'>Home</Link>
                <Link id='web-link' to='/skills'>Skills</Link>
                <Link id='web-link' to='/experience'>Experience</Link>
                <Link id='web-link' to='/projects'>Projects</Link>
            </nav>
        </header>
    )
}

export default withRouter(Header);