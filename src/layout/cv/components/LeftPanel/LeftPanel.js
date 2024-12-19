import Projects from '@cv/components/Projects/Projects';
import MoreGithub from '@cv/components/MoreGithub/MoreGithub';
import './LeftPanel.scss';
import { useEffect, useRef } from 'react';
import useResize from 'AppRoot/hooks/useResize';

const LeftPanel = () => {
    const projects = useRef();
    const {dimensions} = useResize();

    useEffect(() => {
        projects.current.style.height = "unset";

        setTimeout(() => {
            projects.current.style.height = projects.current.clientHeight + "px";
            
        }, 1);
    }, [dimensions])

    useEffect(() => {
        projects.current.style.height = projects.current.clientHeight + "px";
    }, [])

    return(
        <section className='left-panel' ref={projects}>
            <Projects />
            <MoreGithub shouldEqual={false} />
        </section>
    )
}

export default LeftPanel