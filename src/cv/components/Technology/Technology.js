import Circle from 'cv/components/Circle/Circle';
import './Technology.css';

const Technology = ({ icon }) => {
    return(
        <div className='technology'>
            <Circle />
            {icon}
        </div>
    )
}

export default Technology