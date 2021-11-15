import Projects from 'cv/components/Projects/Projects';
import MoreGithub from '../MoreGithub/MoreGithub';
import './LeftPanel.scss';

const LeftPanel = () => {
    return(
        <section className="left-panel">
            <Projects />
            <MoreGithub />
        </section>
    )
}

export default LeftPanel