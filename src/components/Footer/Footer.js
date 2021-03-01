import linkedinlogo from './LinkedIn-logo.png';
import githublogo from './githublogo.png';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <section className='logos'>
                <a href='https://www.linkedin.com/in/keplerridge/' target='_blank'><img src ={linkedinlogo} alt='LinkedIn Logo'/></a>
                <a href='https://github.com/keplerridge' target='_blank'><img src ={githublogo} alt='GitHub Logo'/></a>
            </section>
        </div>
    )
}

export default Footer;