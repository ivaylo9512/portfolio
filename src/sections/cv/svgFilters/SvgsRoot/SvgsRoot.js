import ShapeShadow from 'sections/cv/svgFilters/ShapeShadow';
import BlackShadow from 'sections/cv/svgFilters/BlackShadow';
import NameShadow from 'sections/cv/svgFilters/NameShadow';
import ProjectShadow from 'sections/cv/svgFilters/ProjectShadow';
import CircleShadow from 'sections/cv/svgFilters/CircleShadow';
import DotShadow from 'sections/cv/svgFilters/DotShadow';
import './SvgRoot.css'

const SvgsRoot = () => {
    return(
        <svg className='svg-root' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
            <defs>
                <ShapeShadow />
                <CircleShadow />
                <DotShadow />
                <BlackShadow />
                <NameShadow />
                <ProjectShadow />
            </defs>
        </svg>
    )
}

export default SvgsRoot