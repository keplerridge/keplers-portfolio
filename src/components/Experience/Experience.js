import './Experience.css';

const Experience = () => {
    return(
        <div className='experience'>
            <h1>
                Professional Experience
            </h1>
            <section className='job'>
                <h2>
                    Devmountain, <span>Lehi, UT - Web Developer(Student)</span>
                </h2>
                <h4>
                    November 2020 - March 2021
                </h4>
                <ul className='list'>
                    <li>Built react applications</li>
                    <li>Created and integrated postgreSQL databases</li>
                    <li>Spent time working with a team to accomplish tasks</li>
                </ul>
            </section>
            <section className='job'>
                <h2>
                    Weather Masters Plumbing, <span>Mesa, AZ - Service Plumber</span>
                </h2>
                <h4>
                    August 2020 - October 2020
                </h4>
                <ul className='list'>
                    <li>Assessed, estimated costs, and billed for work done on jobs</li>
                    <li>Completed plumbing work that was needed on site</li>
                    <li>Communicated with customers and managed expecations on work to be done</li>
                    <li>Trained new plumbers on proper procedures and billing</li>
                </ul>
            </section>
            <section className='job'>
                <h2>
                    Ridge Renovation and Construction, <span>Mesa, AZ - Project Manager</span>
                </h2>
                <h4>
                    February 2019 - August 2020
                </h4>
                <ul className='list'>
                    <li>Communicated with homeowners about expectations and specifications for the work to be done</li>
                    <li>Estimated and bid on work to be done</li>
                    <li>Managed budget for individual jobs</li>
                    <li>Inspected and quality checked work on jobs</li>
                </ul>
            </section>
            <section className='job4'>
                <h2>
                    Doyple Plumbing and Heating, <span>Midvale, UT - Plumber</span>
                </h2>
                <h4>
                    October 2017 - February 2019
                </h4>
                <ul className='list'>
                    <li>Installed new plumbing systems</li>
                    <li>Coordinated with general contractors on custom homes</li>
                    <li>Ensured that new hires performed at the company standards</li>
                </ul>
            </section>
        </div>
    )
}

export default Experience;