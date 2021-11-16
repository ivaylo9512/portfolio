import { isProjectsSection } from 'app/slices/animationsSlice';
import Rect from '@svgIcons/Rect';
import Github from '@svgIcons/Github';
import './MoreGithub.scss';
import { useSelector } from 'react-redux';

const MoreGithub = ({ shouldEqual }) => {
    const isProjects = useSelector(isProjectsSection);
   
    return(
        <div className='more-github'>
            <div className='content'>
                <Rect height='89' width='328'/>
                <a data-testid='github-link' tabIndex={isProjects == shouldEqual ? '-1' : undefined} href='https://github.com/ivaylo9512'>
                    <span>More on</span>
                    <Github />
                </a>
            </div>

        </div>
    )
}

export default MoreGithub