import "./Experience.css";
import disneyLogo from "../../assets/images/TWDC.webp";
import arrowDown from "../../assets/icons/arrowDown.png";

const Experience = () => {

    const calculateExperience = () => {
        const today = new Date();
        const startDate = new Date("2009-12-01");
        const difference = today.getTime() - startDate.getTime();
        const years = Math.floor(difference / (1000 * 3600 * 24 * 365));
        const months = Math.floor((difference % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
        return `${years} years and ${months+1} months`;
    }

    const calculateExperienceInJob = () => {
        const today = new Date();
        const startDate = new Date("2021-07-01");
        const difference = today.getTime() - startDate.getTime();
        const years = Math.floor(difference / (1000 * 3600 * 24 * 365));
        const months = Math.floor((difference % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
        return `${years} years and ${months+1} months`;
    }

    const expandCard = (e) => {
        const card = e.target.parentElement.parentElement;
        const jobDesc = card.querySelector(".jobDescription");
        const role = card.querySelector("h2");
        if (jobDesc.style.opacity === ''){
            if(role.innerText === "Regional Head of Digital Product & Technology") {card.style.height = "400%";}
            if(role.innerText === "Jr. Manager, Digital") {card.style.height = "450%";}
            if(role.innerText === "Project Management Supervisor @ Radio Disney") {card.style.height = "500%";}
            if(role.innerText === "Project Management Supervisor @ Disney Interactive") {card.style.height = "550%";}
            if(role.innerText === "Team Lead") {card.style.height = "700%";}
            if(role.innerText === "Player Support Representative") {card.style.height = "400%";}
            card.style.zIndex = "1";
            card.style.gridTemplateRows = "14% 86%";
            jobDesc.style.opacity = "100%";
        }    else {
            card.removeAttribute("style");
            jobDesc.removeAttribute("style");
        }
    }


    return(
        <div className="experienceBody">
            <div className="experienceCard">
                <img className="logoClass" src={disneyLogo} alt="The Walt Disney Company" />
               <div className="textCard">
                <h2>The Walt Disney Company</h2>
                <p>Full time - {calculateExperience()}</p>
                </div>
            </div>

                <div className="experienceCardJob">
                    <div className="experienceCardJobText">
                        <h2>Regional Head of Digital Product & Technology</h2>
                        <p>Jul 2021 - Present | {calculateExperienceInJob()}</p>
                        <p>Buenos Aires, Argentina</p>                  
                    </div>
                    <div className="experienceCardJobArrow">
                    <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                    </div>
                    <p className="jobDescription">
                    <br />
                    Currently expanding the projects built on my previous roles. Empowering local teams in 12 countries across LATAM to develop our digital products with a local flavor.
                    <br />
                    <br />
                    Heading all of Radio Disney's digital processes, including Business Intelligence, Digital Product Development, Maintenance & Support, Technology & Strategy.
                    <br />
                    <br />
                    Setting the long term vision and strategy for Radio Disney and leading the evolution of the line of business into a robust ecosystem of products and experiences.
                    <br />
                    <br />
                    Building teams, processes and developing platforms that directly affect the products, their distribution, their measurement and creating the cycles that guarantee constant improvement on these.
                    <br />
                    <br />
                    Liaison for Radio Disney and Privacy, Legal, Finance, Sales, Marketing, IT, On-Air Product, Central Technology & Information Security.
                    <br />
                    <br />
                    Responsible for all efforts done in Web, Mobile, Disney's Entertainment Podcasts and Audio Streaming.    
                    </p>  
                </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Jr. Manager, Digital</h2>
                <p>Jan 2020 - Jul 2021 | 1 year and 7 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                </div>
                <p className="jobDescription">
                <br />
                Responsible for all of Radio Disney's digital efforts in the LATAM market focusing on achieving the best user experiences. It involved the setting of a vision, strategy and execution of all tasks required to achieve the established goals.
                <br />
                <br />
                Radio Disney's digital portfolio in LATAM includes:
                <br />
                <br />
                - Web. Development, strategy and vision. https://radiodisney.disneylatino.com.
                <br />
                - Mobile app (Radio Disney Latinoamérica). Development, strategy and vision. Available on Google Play Store & Apple App Store.
                <br />
                - Podcasts. Regional. Available on all major podcast aggregators. Spotify, Apple Podcasts, Amazon Music, Google Podcasts, Deezer, Castbox and our owned and operated platforms.
                <br />
                - Radio streaming and its distribution.
                <br />
                - Live digital music events.
                <br />
                - 14 social media accounts. Facebook, Twitter, Instagram & YouTube. @RadioDisneyLA, @RadioDisneyBRA, @RadioDisneyMX & @RadioDisneyPE.
                <br />
                <br />
                Besides leading the digital strategy and business development, I also supported our sales teams to monetize our digital assets and foster the cultural evolution of our LOB, with a strong focus on data insights obtained through our digital portfolio.
                <br />
                <br />
                Finally, my role also made me responsible for the development and execution of technology on Radio Disney’s live events.
                </p>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Project Management Supervisor @ Radio Disney</h2>
                <p>Oct 2017 - Jan 2020 | 2 years and 4 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                </div>
                <p className="jobDescription">
                <br />
                The role was focused on planning, developing and executing Radio Disney's & Radio Disney Vivo's digital strategy for the Latin American market, across the different channels (mobile, web, social media & emerging platforms). The ongoing challenge of the role is to make the Radio business relevant in an ever-changing digital world. 
                <br />
                <br />
                Responsibilities included but were not limited to:
                <br />
                <br />
                • Data analysis & decision making based on insights.
                <br />
                • Requirements analysis and management.
                <br />
                • Business analysis.
                <br />
                • Strategic planning.
                <br />
                • Product planning, development & execution supervision.
                <br />
                • Setting clear goals to the development teams, tracking and documenting progress, status and risks in a systematic way, maintain status info up to date. 
                <br />
                • Meeting and generating process standards, work actively to improve the process balancing procedures and agility. 
                <br />
                • Product management.
                <br />
                • Providing high level estimations and costs for internal feasibility analysis in early stages.
                <br />
                • Adapting Agile methodologies to Radio Disney's work dynamic to achieve internal process improvement.
                </p>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Project Management Supervisor @ Disney Interactive</h2>
                <p>May 2015 - Oct 2017 | 2 years and 6 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                </div>
                <p className="jobDescription">
                <br />
                The role was focused towards developing Disney Interactive's mobile business in Latin America through the development of mobile-only products that would generate a revenue to the Company. Said products included Disney branded games & entertainment services among which the following were included: Disney Jr. Play, Disney's Game On, Disney's Girlz Up!, Marvel Editorial App, Star Wars Editorial App, Code Baymax, Disney Cubes, Disney's 365 Cuentos, Finding Dory, Falling Olaf, Disney's PopFace, Disney's Stickies, Zootopia among others.
                <br />
                <br />
                Responsibilitied included but were not limited to:
                <br />
                <br />
                • Maintaining the different mobile apps' roadmaps and backlogs. Leveraging priorities and making sure compromised deadlines were met.
                <br />
                • Requirements analysis and management.
                <br />
                • Setting clear goals to the development teams, tracking and documenting progress, status and risks in a systematic way, maintaining status info up to date. 
                <br />
                • Documenting product definitions. 
                <br />
                • Meeting and generating process standards, working actively to improve the process balancing procedures and agility. 
                <br />
                • Attacking risks proactively. 
                <br />
                • Taking care of administrative tasks like contracts and payments. 
                <br />
                • Managing stakeholders across the company.
                <br />
                • Providing high level estimations and costs for internal feasibility analysis in early stages.
                <br />
                <br />
                This role was performed under the Scrum framework.
                </p>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Team Lead</h2>
                <p>May 2012 - May 2015 | 3 years and 1 month</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                </div>
                <p className="jobDescription">
                <br />
                As a Team Lead at The Walt Disney Company I've been involved in guaranteeing excellence in the delivery of all tasks related to Disney Interactive's Guest Experience Department.
                <br />
                <br />
                The basic requirements of the role involved leading teams providing email support (Salesforce CRM), moderation reports processing, username approval processing, online moderation and the creation and execution of engaging online events. All of these require keeping kid's online safety as a top priority.
                <br />
                <br />
                I have participated and helped define the Department's policies regarding all of the previously mentioned tasks, which are valid up to date, having a global impact.
                <br />
                <br />
                Throughout time I have led teams of up to 7 local reports while also providing indirect leadership to up to 5 employees based in Canada and United Kingdom.
                <br />
                <br />
                Apart from covering the role's basic needs I have taken on additional responsibilities related to the Department's main goals. These include:
                <br />
                <br />
                - Management & supervision of product's blog content, comment approval and responses.
                <br />
                - Management & supervision of product's YouTube channel, involving video uploading, comment approval and responses plus analytics tracking and reporting.
                <br />
                - Management & supervision of online acting and online acting campaigns.
                <br />
                - General coordination of the Technical Support area.
                <br />
                <br />
                Moreover, this role has required me to:
                <br />
                <br />
                - Carry on candidate interviewing and selection.
                <br />
                - Actively contribute towards voicing guests' feedback and providing periodical reports.
                <br />
                - Carry on periodical performance reviews to reports.
                <br />
                - Lead training and up-training sessions of responsibilities related to Player Support.
                <br />
                - Document information in Atlassian's Confluence.
                <br />
                - Communicate and work using Atlassian's project and issue tracking platform JIRA.
                </p>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Player Support Representative</h2>
                <p>Dec 2009 - May 2012 | 2 years and 6 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" onClick={(e) => expandCard(e)} src={arrowDown} alt="arrow down" />
                </div>
                <p className="jobDescription">
                <br />
                This was a Support role which involved communicating daily with all of Disney's Club Penguin players daily. The role had two main goals; enhancing user's experience and enforcing online security standards. The main challenge the role posed was being able to improve user's experience without having the opportunity to directly affect the product. It had to be done by developing exciting 1:1 stories with users.
                <br />
                <br />
                • Revamp of the local Technical Support Area.
                <br />
                • New hire training.
                <br />
                • Weekly community feedback documentation.
                <br />
                • Team Lead back-up.
                <br />
                • Member of NGO committee.
                <br />
                • Name approvals.
                <br />
                • Reports processing.
                <br />
                • Security alert escalations.
                <br />
                • Online actor.
                <br />
                • Creation of online campaigns and activities.
                </p>
            </div>
        </div>
    )
}

export default Experience;