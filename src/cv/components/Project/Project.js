import ProjectRect from "cv/icons/ProjectRect";
import Circle from "../Circle/Circle";
import "cv/components/Project/Project.css";

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