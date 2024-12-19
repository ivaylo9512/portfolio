import DotsLine from '@cv/components/DotsLine/DotsLine';
import List from '@cv/components/List/List';
import Ribon from '@cv/components/Ribon/Ribon';
import Java from '@svgIcons/Java';
import Javascript from '@svgIcons/Javascript';
import Php from '@svgIcons/Php';
import './Languages.scss';

const Languages = () => {
    return(
        <List className='languages' ribon={<span className='title'>Languages</span>}>
            <Ribon>
                <Javascript />
                <DotsLine />
            </Ribon>
            <Ribon>
                <Java />
                <DotsLine />
            </Ribon>
            <Ribon>
                <Php />
                <DotsLine />
            </Ribon>
        </List>
    )
}

export default Languages