import Ribon from "../Ribon"

const List = ({ name, children }) => {
    return(
        <div className='list'> 
            <Ribon name={name}/>
            {children}
        </div>
    )
}

export default List