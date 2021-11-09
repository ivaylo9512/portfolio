import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
    return(
        <div className="projects">
            <Project ratio={20 / 11}/>
            <Project ratio={25.6 / 11}/>
            <Project ratio={20 / 11}/>
            <Project ratio={20 / 11}/>
            <Project ratio={20 / 11}/>
        </div>
    )
}

export default Projects