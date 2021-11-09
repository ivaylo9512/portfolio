import DotsLine from "cv/components/DotsLine/DotsLine";
import Languages from "cv/components/Languages/Languages";
import Technologies from "cv/components/Technologies/Technologies";
import Cources from "cv/components/Cources/Cources";
import './RightPanel.css';

const RightPanel = () => {
    return(
        <section className="right-panel">
            <DotsLine /> 
            <Languages />
            <Technologies />
            <Cources />
        </section>
    )
}

export default RightPanel