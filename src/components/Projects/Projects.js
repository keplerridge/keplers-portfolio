import './Projects.css';

const Projects = () => {
    return(
        <div className='projects'>
            <h1>
                Projects
            </h1>
            <section className='project'>
                <h2>
                    Music App - <span><a id='github-link' href='https://github.com/WR8-Desktop-Dj/wr8-group-project-desktop-dj' target='_blank'>GitHub Repo</a></span>
                </h2>
                <h4>
                    React || Redux || Node.js || PostgreSQL || CSS || Nodemailer || S3 || Sockets || OAuth || Spotify API
                </h4>
                <ul className='project-list'>
                    <li>Created group listening app</li>
                    <li>Integrated Nodemailer, AWS S3, and Sockets</li>
                    <li>Integrated OAuth with Spotify API</li>
                    <li>Styled with SASS and CSS</li>
                    <li>Integrated postgreSQL database</li>
                </ul>
            </section>
            <section className='project'>
                <h2>
                    Equipment Rental App - <span><a id='github-link' href='https://github.com/keplerridge/personal-project-ridge-rentals' target='_blank'>GitHub Repo</a></span>
                </h2>
                <h4>
                    React || Redux || Node.js || Express || PostgreSQL || CSS || Nodemailer || S3 || Bcrypt
                </h4>
                <ul className='project-list'>
                    <li>Created app for equipment rental</li>
                    <li>Integrated Nodemailer and AWS S3</li>
                    <li>Utilized Digital Ocean for deployment</li>
                    <li>Styling per client's request</li>
                    <li>Bcrypt for authentication and hashing of passwords</li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;