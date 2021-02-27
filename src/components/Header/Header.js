import {withRouter, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                Kepler Ridge
            </h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/experience'>Experience</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
            </nav>
        </header>
    )
}

export default withRouter(Header);