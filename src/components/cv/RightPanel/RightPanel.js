import DotsLine from "../DotsLine/DotsLine";
import List from  '../List/List';
import './RightPanel.css';

const RightPanel = () => {
    return(
        <div className="right-panel">
            <DotsLine /> 
            <List name="Languages"/>
            <List name="Cources"/>
        </div>
    )
}

export default RightPanel