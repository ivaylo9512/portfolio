import { isProjectsSection } from "app/slices/animationsSlice";
import Rect from "cv/icons/Rect";
import Github from "svgIcons/Github";
import './MoreGithub.scss';
import { useSelector } from 'react-redux';

const MoreGithub = () => {
    const isProfile = useSelector(isProjectsSection);
   
    return(
        <div className="more-github">
            <div className='content'>
                <Rect height='89' width='328'/>
                <a tabIndex={isProfile ? '-1' : undefined} href="https://github.com/ivaylo9512">
                    <span>More on</span>
                    <Github />
                </a>
            </div>

        </div>
    )
}

export default MoreGithub