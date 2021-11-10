import Circle from 'cv/icons/Circle';
import './Technology.scss';

const Technology = ({ icon }) => {
    return(
        <div className='technology'>
            <Circle />
            {icon}
        </div>
    )
}

export default Technology