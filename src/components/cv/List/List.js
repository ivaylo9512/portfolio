import Ribon from '../Ribon/Ribon';
import './List.css';

const List = ({ name, children }) => {
    return(
        <div className='list'> 
            <Ribon name={name}/>
            {children}
        </div>
    )
}

export default List