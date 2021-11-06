const RectangleWhite = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 564 95">
            <defs>
                <filter id="rect-white" x="0" y="0" width="564" height="95" filterUnits="userSpaceOnUse">
                    <feOffset result="offset" dx="0.45" dy="1.949" in="SourceAlpha"></feOffset>
                    <feGaussianBlur result="blur" stdDeviation="2.646"></feGaussianBlur>
                    <feFlood result="flood" flood-opacity="0.35"></feFlood>
                    <feComposite result="composite" operator="in" in2="blur"></feComposite>
                    <feBlend result="blend" in="SourceGraphic"></feBlend>
                </filter>
            </defs>
        </svg>
    )
}