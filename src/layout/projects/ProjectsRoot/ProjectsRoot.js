import Background from '@projects/components/Background/Background'
import AnimationsRoot from '@projects/components/AnimationsRoot/AnimationsRoot'
import './ProjectsRoot.scss'
import { useSelector } from 'react-redux'
import { getCurrentSlide } from 'app/slices/animationsSlice'

const ProjectsRoot = () => {
    const currentSlide = useSelector(getCurrentSlide);
    
    return(
        <section data-testid='projects-root' className={`projects-root ${currentSlide}-slide`}>
            <div className='scroll'>
                <Background />
                <AnimationsRoot />
            </div>
        </section>
    )
}

export default ProjectsRoot