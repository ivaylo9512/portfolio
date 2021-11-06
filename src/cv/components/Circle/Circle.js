import './Circle.css'

const Circle = ({ fill }) => {
    return(
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <circle style={ { fill, filter: `url(#${fill})`} } r="50%" cx="50%" cy="50%"></circle>
        </svg>
    )
}
export default Circle
