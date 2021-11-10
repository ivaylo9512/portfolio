const RestaurantBarShadow = () => {
    return(
        <filter id="filter" x="0.5" y="0.5" width="141" height="41" filterUnits="userSpaceOnUse">
            <feOffset result="offset" in="SourceAlpha"/>
            <feGaussianBlur result="blur" stdDeviation="2.236"/>
            <feFlood result="flood" flood-opacity="0.97"/>
            <feComposite result="composite" operator="in" in2="blur"/>
            <feBlend result="blend" in="SourceGraphic"/>
        </filter>
    )
}

export default RestaurantBarShadow
