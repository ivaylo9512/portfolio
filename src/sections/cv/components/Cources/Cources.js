import List from '@cv/components/List/List'
import CourcesSvg from '@svgIcons/CourcesSvg'
import Self from '@svgIcons/Self';
import Telerik from '@svgIcons/Telerik';
import Ribon from '@cv/components/Ribon/Ribon';
import './Cources.scss';

const Cources = () => {
    return(
        <List className='cources' name={<CourcesSvg />}>
            <Ribon name={<Self />}></Ribon>
            <Ribon name={<Telerik />}></Ribon>
            <Ribon name={<Self />}></Ribon>
        </List>
    )
}

export default Cources