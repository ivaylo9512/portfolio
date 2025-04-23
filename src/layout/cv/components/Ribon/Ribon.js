import Rect from '@svgIcons/Rect';
import './Ribon.scss';

const Ribon = ({ name, ribon, children }) => {
    return(
        <div className='ribon'>
            <div className='content'>
                {ribon ? ribon : name ? <span>{name}</span> : ""}
                {children}
            </div>
            <Rect height='85' width={564}/>
        </div>
    )
}

export default Ribon