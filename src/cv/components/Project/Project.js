import Circle from 'cv/icons/Circle';
import './Project.scss';
import Github from 'svgIcons/Github';
import Rect from 'cv/icons/Rect';
import { useSelector } from 'react-redux';
import { isProjectsSection } from 'app/slices/animationsSlice';

const Project = ({ height, width, name, repo, info }) => {
    const isProfile = useSelector(isProjectsSection);

    return(
        <div className='project'>
            <div className='content'>
                <p className='name'>{name}</p>
                <div className='github-container'>
                    <Github />
                    <a tabIndex={isProfile ? '-1' : undefined} href={`https://github.com/ivaylo9512/${repo}`}>Github</a>
                </div>
                <div className='info'>
                    <Circle />
                    <p>{info}</p>
                </div>
            </div>
            <div className='clip'>
                <Circle />
            </div>
            <Rect height={height} width={width} />
        </div>
    )
}
export default Project