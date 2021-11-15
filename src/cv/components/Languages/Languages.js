import DotsLine from 'cv/components/DotsLine/DotsLine';
import List from 'cv/components/List/List';
import Ribon from 'cv/components/Ribon/Ribon';
import Java from 'cv/icons/Java';
import Javascript from 'cv/icons/Javascript';
import Php from 'cv/icons/Php';
import LanguagesSvg from 'cv/icons/LanguagesSvg';
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