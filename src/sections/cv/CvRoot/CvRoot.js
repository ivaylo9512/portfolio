import Background from '@cv/components/Background/Background';
import LeftPanel from '@cv/components/LeftPanel/LeftPanel.js';
import RightPanel from '@cv/components/RightPanel/RightPanel.js';
import FiltersRoot from '@cv/svgFilters/FiltersRoot/FiltersRoot';
import './CvRoot.scss';

const CvRoot = () => {
    return(
        <section className='cv first-style'>
            <div className='translate-wrapper'>
                <FiltersRoot />
                <Background />
                <LeftPanel />
                <RightPanel />
            </div>
        </section>
    )

};

export default CvRoot