const NameShadow = () => {
    return(
        <filter id="name-shadow" x="-20%" y="-20%" width="160%" height="160%" filterUnits="userSpaceOnUse">
            <feOffset result="offset" dx="0.225" dy="0.974" in="SourceAlpha"/>
            <feGaussianBlur result="blur" stdDeviation="2"/>
            <feFlood result="flood" flood-opacity="0.35"/>
            <feComposite result="composite" operator="in" in2="blur"/>
            <feBlend result="blend" in="SourceGraphic"/>
      </filter>
    )
}

export default NameShadow