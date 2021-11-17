import Projects from '@cv/components/Projects/Projects';
import MoreGithub from '@cv/components/MoreGithub/MoreGithub';
import './LeftPanel.scss';

const LeftPanel = () => {
    return(
        <section className='left-panel'>
            <Projects />
            <MoreGithub shouldEqual={false} />
        </section>
    )
}

export default LeftPanel