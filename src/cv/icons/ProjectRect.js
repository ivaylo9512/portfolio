const ProjectRect = ({ ratio }) => {
    return(
        <svg className="project-rect" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${200 * ratio} 200`} xmlnsXlink="http://www.w3.org/1999/xlink" >
            <rect width="100%" height="100%" rx="0.5vw" ry="0.5vw"/>
        </svg>
    )
}

export default ProjectRect