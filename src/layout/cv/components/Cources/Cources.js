import List from '@cv/components/List/List'
import CourcesSvg from '@svgIcons/CourcesSvg'
import Self from '@svgIcons/Self';
import Telerik from '@svgIcons/Telerik';
import Ribon from '@cv/components/Ribon/Ribon';
import './Cources.scss';
import Year2016 from '@svgIcons/Year2016';
import Year2018 from '@svgIcons/Year2018';
import Rect from '@svgIcons/Rect';
import Angular from '@svgIcons/Angular';
import Spring from '@svgIcons/Spring';
import Year2021 from '@svgIcons/Year2021';
import ReactSvg from '@svgIcons/ReactSvg';

const Cources = () => {
    return(
        <List className='cources' name={<CourcesSvg />}>
            <Ribon name={<Self />}>
                <Year2016 />
                <Rect width={30} height={14} radius={3}/>
                <Year2018 />
                <Angular />
            </Ribon>
            <Ribon name={<Telerik />}>
                <Year2018 />
                <Spring />
            </Ribon>
            <Ribon name={<Self />}>
                <Year2018 />
                <Rect width={30} height={14} radius={3}/>
                <Year2021 />
                <ReactSvg />
            </Ribon>
        </List>
    )
}

export default Cources