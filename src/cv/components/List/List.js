import Ribon from 'cv/components/Ribon/Ribon';
import ListSvg from 'cv/icons/ListSvg';
import './List.scss';

const List = ({ name, children, className }) => {
    return(
        <div className={'list ' + className }> 
            <Ribon name={name}>
                <ListSvg />
            </Ribon>
            {children}
        </div>
    )
}

export default List