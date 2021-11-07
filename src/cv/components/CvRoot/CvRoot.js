import Background from "cv/components/Background/Background";
import LeftPanel from "cv/components/LeftPanel/LeftPanel.js";
import RightPanel from "cv/components/RightPanel/RightPanel.js";
import SvgsRoot from "cv/svgFilters/SvgsRoot/SvgsRoot";
import "./CvRoot.css";

const CvRoot = () => {

    return(
        <section className='cv first-style'>
            <SvgsRoot />
            <Background />
            <LeftPanel />
            <RightPanel />
        </section>
    )

};

export default CvRoot