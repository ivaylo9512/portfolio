import Background from '@projects/components/Background/Background'
import AnimationsRoot from '@projects/components/AnimationsRoot/AnimationsRoot'
import './ProjectsRoot.scss'
import { useEffect, useRef } from 'react'

const ProjectsRoot = () => {
    const scrollContainer = useRef();
    const scroll = useRef();

    useEffect(() => {
        hideScrollBar();
        window.addEventListener('resize', hideScrollBar)

        return () => window.removeEventListener('resize', hideScrollBar)
    }, []) 


    const hideScrollBar = (e) => {
        const scrollHeight = parseFloat(window.getComputedStyle(scroll.current).height)
        const containerHeight = parseFloat(window.getComputedStyle(scrollContainer.current).height)

        scrollContainer.current.style.height = containerHeight * 2 - scrollHeight + 'px';
    }
    return(
        <section className='projects-root' ref={scrollContainer}>
            <div className='scroll' ref={scroll}>
                <Background />
                <AnimationsRoot />
            </div>
        </section>
    )
}

export default ProjectsRoot