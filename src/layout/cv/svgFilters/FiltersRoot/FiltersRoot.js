import ShapeShadow from '@cv/svgFilters/ShapeShadow';
import BlackShadow from '@cv/svgFilters/BlackShadow';
import NameShadow from '@cv/svgFilters/NameShadow';
import ProjectShadow from '@cv/svgFilters/ProjectShadow';
import CircleShadow from '@cv/svgFilters/CircleShadow';
import DotShadow from '@cv/svgFilters/DotShadow';
import './FiltersRoot.scss'

const FiltersRoot = () => {
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

export default FiltersRoot