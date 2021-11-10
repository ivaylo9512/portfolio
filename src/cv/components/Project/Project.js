import ProjectRect from "cv/icons/ProjectRect";
import Circle from "cv/icons/Circle";
import "./Project.scss";

const Project = ({ ratio }) => {
    return(
        <div className="project">
            <div className="clip">
                <Circle />
            </div>
            <ProjectRect ratio={ratio} />
        </div>
    )
}
export default Project