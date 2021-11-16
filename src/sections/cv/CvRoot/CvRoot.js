import Background from '@cv/components/Background/Background';
import LeftPanel from '@cv/components/LeftPanel/LeftPanel.js';
import RightPanel from '@cv/components/RightPanel/RightPanel.js';
import SvgsRoot from '@cv/svgFilters/SvgsRoot/SvgsRoot';
import './CvRoot.scss';

const CvRoot = () => {
    return(
        <section className='cv first-style'>
            <div className='translate-wrapper'>
                <SvgsRoot />
                <Background />
                <LeftPanel />
                <RightPanel />
            </div>
        </section>
    )

};

export default CvRoot