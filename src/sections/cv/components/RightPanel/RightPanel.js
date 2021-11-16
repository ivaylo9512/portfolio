import DotsLine from 'sections/cv/components/DotsLine/DotsLine';
import Languages from 'sections/cv/components/Languages/Languages';
import Technologies from 'sections/cv/components/Technologies/Technologies';
import Cources from 'sections/cv/components/Cources/Cources';
import './RightPanel.scss';

const RightPanel = () => {
    return(
        <section className='right-panel'>
            <DotsLine /> 
            <Languages />
            <Technologies />
            <Cources />
        </section>
    )
}

export default RightPanel