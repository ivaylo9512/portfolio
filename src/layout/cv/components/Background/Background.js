import X from '@svgIcons/X.js';
import './Background.scss';
import Circles from '@cv/components/Circles/Circles.js';
import MidLogo from '@svgIcons/MidLogo';
import ReactSvg from '@svgIcons/ReactSvg';
import O from '@svgIcons/O';

const Background = () => {
    return(
        <div className='background'>
            <Circles />
            <MidLogo />
            <div className='react-icons'>
                <ReactSvg />
                <ReactSvg />
                <ReactSvg />
            </div>
            <div className='letters bottom'>
                <X/>
                <O />
            </div>
            <div className='letters project'>
                <div>
                    <X/>
                    <O />
                </div>
                <div>
                    <X/>
                    <O />
                </div>
            </div>

        </div>
    )
}

export default Background