const SvgFilters = () => {
    return(
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="white" x="-20%" y="-20%" width="160%" height="160%"> <feOffset result="offOut" in="SourceAlpha" dx="2" dy="4"></feOffset> <feColorMatrix result="matrixOut" in="offOut" type="matrix" values=" 0.49 0 0 0 0 0 0.49 0 0 0 0 0 0.49 0 0 0 0 0 0.5 0"></feColorMatrix> <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="9"></feGaussianBlur> <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend> </filter>
                <filter id="black" x="-20%" y="-20%" width="160%" height="160%"> <feOffset result="offOut" in="SourceAlpha" dx="2" dy="4"></feOffset> <feColorMatrix result="matrixOut" in="offOut" type="matrix" values=" 0.49 0 0 0 0 0 2.49 0 0 0 0 0 0.49 0 0 0 0 0 1.5 0"></feColorMatrix> <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="14"></feGaussianBlur> <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend> </filter>
                <circle class="reusable-black-circle" id="reusable-black-circle" r="50%" cx="50%" cy="50%"></circle>
            </defs>
        </svg>
    )
}

export default SvgFilters