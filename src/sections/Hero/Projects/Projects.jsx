import styles from './ProjectsStyles.module.css';
import flappy from '../../../assets/flappyBird.png';
import calc from '../../../assets/calculator.png'; 
import spendsmart from '../../../assets/SpendSmart.png';
import BTC from '../../../assets/btc.png'; 
import ProjectCard from '../../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={flappy} 
                link="https://github.com/Qwamob/Flappy-Bird-Windows-Form-App"
                h3="Flappy Bird"
                p = "WPF Game"
            />
            <ProjectCard 
                src={calc} 
                link="https://github.com/Qwamob/WPF-Simple-Calculator-app"
                h3="Calculator"
                p = "Simple Calculator"
            />
            <ProjectCard 
                src={spendsmart} 
                link="https://github.com/Qwamob/Study.SpendSmart"
                h3="SpendSmart"
                p = "MVC App + Entity Framework"
            />
            <ProjectCard 
                src={BTC} 
                link="https://github.com/Qwamob/BTC-price-tracker"
                h3="BTC Price Tracker"
                p = "Python Script"
            />
        </div>
    </section>
        
  );
}


export default Projects;