import Rect from 'cv/icons/Rect';
import './Ribon.scss';

const Ribon = ({ name, children }) => {
    return(
        <div className='ribon'>
            <div className='content'>
                {name}
                {children}
            </div>
            <Rect height='85' width={564}/>
        </div>
    )
}

export default Ribon