const RectangleWhite = () => {
    return(
        <filter id="black-shadow" x="-20%" y="-20%" width="160%" height="160%" filterUnits="userSpaceOnUse">
            <feOffset result="offset" dx="0.45" dy="3.249" in="SourceAlpha"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="2.646"></feGaussianBlur>
            <feFlood result="flood" floodOpacity="0.5"></feFlood>
            <feComposite result="composite" operator="in" in2="blur"></feComposite>
            <feBlend result="blend" in="SourceGraphic"></feBlend>
        </filter>
    )
}

export default RectangleWhite