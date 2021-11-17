import Circle from '@svgIcons/Circle';
import './Technology.scss';

const Technology = ({ icon, viewBox }) => {
    return(
        <div className='technology'>
            <Circle viewBox={viewBox} />
            {icon}
        </div>
    )
}

export default Technology