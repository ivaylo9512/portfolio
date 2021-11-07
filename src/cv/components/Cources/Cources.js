import List from "cv/components/List/List"
import CourcesSvg from "cv/icons/CourcesSvg"
import Self from "cv/icons/Self";
import Telerik from "cv/icons/Telerik";
import Ribon from "cv/components/Ribon/Ribon";
import './Cources.css';

const Cources = () => {
    return(
        <List className="cources" name={<CourcesSvg />}>
            <Ribon name={<Self />}></Ribon>
            <Ribon name={<Telerik />}></Ribon>
            <Ribon name={<Self />}></Ribon>
        </List>
    )
}

export default Cources