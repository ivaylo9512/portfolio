import Rect from "cv/icons/Rect";
import Github from "svgIcons/Github";
import './MoreGithub.scss';

const MoreGithub = () => {
    return(
        <div className="more-github">
            <div className='content'>
                <Rect height='89' width='328'/>
                <a href="https://github.com/ivaylo9512">
                    <span>More on</span>
                    <Github />
                </a>
            </div>

        </div>
    )
}

export default MoreGithub