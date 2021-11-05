import './Ribon.css';

const Ribon = ({ name, color, children }) => {
    return(
        <div className={'ribon ' + color}>
            <span>{name}</span>
        </div>
    )
}

export default Ribon