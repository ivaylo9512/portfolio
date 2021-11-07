import Rect from 'cv/components/Rect';
import './Ribon.css';

const Ribon = ({ name, children }) => {
    return(
        <div className="ribon">
            <div className="content">
                {name}
                {children}
            </div>
            <Rect />
        </div>
    )
}

export default Ribon