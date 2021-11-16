import DotsLine from '@cv/components/DotsLine/DotsLine';
import List from '@cv/components/List/List';
import Ribon from '@cv/components/Ribon/Ribon';
import Java from '@svgIcons/Java';
import Javascript from '@svgIcons/Javascript';
import Php from '@svgIcons/Php';
import LanguagesSvg from '@svgIcons/LanguagesSvg';
import './Languages.scss';

const Languages = () => {
    return(
        <List className='languages' name={<LanguagesSvg />}>
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