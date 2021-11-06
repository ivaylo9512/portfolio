import Background from "cv/components/Background/Background";
import LeftPanel from "cv/components/LeftPanel/LeftPanel.js";
import RightPanel from "cv/components/RightPanel/RightPanel.js";
import "./CvRoot.css";

const CvRoot = () => {

    return(
        <section className='cv first-style'>
            <Background />
            <LeftPanel />
            <RightPanel />
        </section>
    )

};

export default CvRoot