import picture from './portfolio-picture.jpg';
import './Home.css'

const Home = () => {
    return(
        <section className='body'>
            <img src ={picture} alt="Kepler's Professional Picture"/>
            <section className='article'>
                <h1>About Me</h1>
                <article>
                    I am a full stack web developer in Eagle Mountain, UT. I find the method and process of developing applications to be fascinating and love to learn and improve my skillset. Prior to web development, I worked in the construction industry and sales. I spent time building custom homes while in construction and time as a sales trainer and salesman at Murdock Chevrolet while working in sales. Prior to my work in construction, I had studied, and quite enjoyed, computer science. <br></br><br></br>From November 2020 through the beginning of March 2021, I attended an immersive coding bootcamp for web development at Devmountain. I am looking forward to building upon the skills I have and improving my craft. I passionately believe that if someone is willing to work hard and put in effort, there is not a skill they cannot master. I apply this mindset at all times in my life to improve myself.<br></br><br></br>
                    I firmly believe that nothing helps teams, leaders, and clients work in sync together better than managing each other's expectations and delivering accordingly.
                </article>
                <h3>
                    <a href='https://docs.google.com/document/d/1FVIHulnPD14W-fUgmaxcmg_I872zqIh_ctvP9kj1E3U/edit?usp=sharing' target='_blank'>VIEW RESUME</a>
                </h3>
            </section>
        </section>
    )
}

export default Home;