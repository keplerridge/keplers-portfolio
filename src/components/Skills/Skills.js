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
                <img src ={reactlogo} alt='React Logo'/>
                <img src ={js} alt='JavaScript Logo'/>
                <img src ={node} alt='Node.js Logo'/>
                <img src ={postgres} alt='postgreSQL Logo'/>
                <img src ={git} alt='Git Logo'/>
            </section>
            <section className='bottom'>
                <img src ={aws} alt='AWS Logo'/>
                <img src ={html} alt='HTML Logo'/>
                <img src ={css} alt='CSS Logo'/>
                <img src ={axios} alt='axios Logo'/>
                <img src ={sql} alt='SQL Tabs Logo'/>
            </section>
        </section>
    )
}

export default Skills;