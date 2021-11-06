import DotsLine from "cv/components/DotsLine/DotsLine";
import Languages from "cv/components/Languages/Languages";
import List from  'cv/components/List/List';
import Technologies from "cv/components/Technologies/Technologies";
import './RightPanel.css';

const RightPanel = () => {
    return(
        <div className="right-panel">
            <DotsLine /> 
            <Languages />
            <Technologies />
            <List name="Cources"/>
        </div>
    )
}

export default RightPanel