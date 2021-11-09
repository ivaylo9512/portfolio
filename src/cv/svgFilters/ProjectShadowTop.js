const ProjectShadowTop = () => {
    return(
        <filter id="project-shadow-top" x="-20%" y="-20%" width="160%" height="160%">
            <feOffset result="offset" dx="2" dy="-0.949" in="SourceAlpha"/>
            <feGaussianBlur result="blur" stdDeviation="1.4"/>
            <feFlood result="flood" flood-opacity="0.38" flood-color="#bebebe"/>
            <feComposite result="composite" operator="in" in2="blur"/>
            <feBlend result="blend" in="SourceGraphic"/>
        </filter>
    )
}

export default ProjectShadowTop