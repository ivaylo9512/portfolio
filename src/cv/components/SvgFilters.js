const SvgFilters = () => {
    return(
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="white" x="-20%" y="-20%" width="160%" height="160%"> <feOffset result="offOut" in="SourceAlpha" dx="2" dy="4"></feOffset> <feColorMatrix result="matrixOut" in="offOut" type="matrix" values=" 0.49 0 0 0 0 0 0.49 0 0 0 0 0 0.49 0 0 0 0 0 0.5 0"></feColorMatrix> <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="9"></feGaussianBlur> <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend> </filter>
                <filter id="black" x="-20%" y="-20%" width="160%" height="160%"> <feOffset result="offOut" in="SourceAlpha" dx="2" dy="4"></feOffset> <feColorMatrix result="matrixOut" in="offOut" type="matrix" values=" 0.49 0 0 0 0 0 2.49 0 0 0 0 0 0.49 0 0 0 0 0 1.5 0"></feColorMatrix> <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="14"></feGaussianBlur> <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend> </filter>
                <circle class="reusable-black-circle" id="reusable-black-circle" r="50%" cx="50%" cy="50%"></circle>
                <defs>
                <filter id="filter" x="0" y="0" width="564" height="95" filterUnits="userSpaceOnUse">
                    <feOffset result="offset" dx="0.45" dy="1.949" in="SourceAlpha"></feOffset>
                    <feGaussianBlur result="blur" stdDeviation="2.646"></feGaussianBlur>
                    <feFlood result="flood" flood-opacity="0.35"></feFlood>
                    <feComposite result="composite" operator="in" in2="blur"></feComposite>
                    <feBlend result="blend" in="SourceGraphic"></feBlend>
                </filter>
            </defs>
            </defs>
        </svg>
    )
}

export default SvgFilters