import List from '@cv/components/List/List'
import Ribon from '@cv/components/Ribon/Ribon';
import './Cources.scss';
import Rect from '@svgIcons/Rect';
import Angular from '@svgIcons/Angular';
import Spring from '@svgIcons/Spring';
import ReactSvg from '@svgIcons/ReactSvg';

const Cources = () => {
    return(
        <List className='cources' ribon={<span className='work'>Work</span>}>
            <Ribon name={"Freelance"}>
                <span>2016</span>
                <Rect width={30} height={14} radius={3}/>
                <span>2018</span>
                <Angular />
            </Ribon>
            <Ribon name={"Telerik"}>
                <span>2018</span>
                <Spring />
            </Ribon>
            <Ribon name={"Projects"}>
                <span>2018</span>
                <Rect width={30} height={14} radius={3}/>
                <span>2022</span>
                <ReactSvg />
            </Ribon>
            <Ribon name={"Hypoport"}>
                <span>2023</span>
                <ReactSvg />
            </Ribon>
        </List>
    )
}

export default Cources