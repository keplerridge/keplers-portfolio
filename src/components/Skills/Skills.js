import reactlogo from './reactlogo.png';
import js from './jslogo.png'
import node from './nodelogo.png';
import postgres from './postgreslogo.png';
import git from './gitlogo.png';
import aws from './awslogo.png';
import html from './htmllogo.png';
import css from './newcsslogo.png';
import axios from './axioslogo.jpg';
import sql from './sqltabslogo.png';
import './Skills.css';

const Skills = () => {
    return(
        <section className='skills-body'>
            <section className='top'>
                <section>
                    <img src ={reactlogo} alt='React Logo'/>
                    <h3>React.js</h3>
                </section>
                <section>
                    <img src ={js} alt='JavaScript Logo'/>
                    <h3>JavaScript</h3>
                </section>
                <section>
                    <img src ={node} alt='Node.js Logo'/>
                    <h3>Node.js</h3>
                </section>
                <section>
                    <img src ={postgres} alt='postgreSQL Logo'/>
                    <h3>postgreSQL</h3>
                </section>
                <section>
                    <img src ={git} alt='Git Logo'/>
                    <h3>Git</h3>
                </section>
            </section>
            <section className='bottom'>
                <section>
                    <img src ={aws} alt='AWS Logo'/>
                    <h3>AWS(S3)</h3>
                </section>
                <section>
                    <img src ={html} alt='HTML Logo'/>
                    <h3>HTML</h3>
                </section>
                <section>
                    <img src ={css} alt='CSS Logo'/>
                    <h3>CSS</h3>
                </section>
                <section>
                    <img src ={axios} alt='axios Logo'/>
                    <h3>axios & express</h3>
                </section>
                <section className='bottom-picture'>
                    <img src ={sql} alt='SQL Tabs Logo'/>
                    <h3>SQL Tabs</h3>
                </section>
            </section>
        </section>
    )
}

export default Skills;