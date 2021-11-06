import DotsLine from "cv/components/DotsLine/DotsLine"
import List from "cv/components/List/List"
import Ribon from "cv/components/Ribon/Ribon"
import './Languages.css'
const Languages = () => {
    return(
        <List className='languages' name='Languages'>
            <Ribon name='Javascript'><DotsLine /></Ribon>
            <Ribon name='Java'></Ribon>
            <Ribon name='Php'></Ribon>
        </List>
    )
}

export default Languages