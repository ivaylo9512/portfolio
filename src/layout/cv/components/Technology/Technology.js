import Circle from '@svgIcons/Circle';
import './Technology.scss';

const Technology = ({ icon }) => {
    return(
        <div className='technology'>
            <Circle viewBoxUnit='129' />
            {icon}
        </div>
    )
}

export default Technology