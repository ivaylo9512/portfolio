import Ribon from 'cv/components/Ribon/Ribon';
import './List.css';

const List = ({ name, children, className }) => {
    return(
        <div className={'list ' + className }> 
            <Ribon name={name}/>
            {children}
        </div>
    )
}

export default List