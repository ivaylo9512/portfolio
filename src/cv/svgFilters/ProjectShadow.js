const ShapeShadow = () => {
    return(
        <filter id="project-shadow" x="-20%" y="-20%" width="160%" height="160%" filterUnits="userSpaceOnUse">
            <feOffset result="offset" dx="0.45" dy="1.949" in="SourceAlpha"/>
            <feGaussianBlur result="blur" stdDeviation="2.449"/>
            <feFlood result="flood" flood-opacity="0.38"/>
            <feComposite result="composite" operator="in" in2="blur"/>
            <feBlend result="blend" in="SourceGraphic"/>
        </filter>
    )
}

export default ShapeShadow