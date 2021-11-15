import ProjectsShadow from 'sections/projects/svgFilters/ProjectsShadow';
import './ProfileAnimation.scss';

const ProfileAnimation = ({ className }) => {
    return(
        <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 274.42 138.03'>
            <defs>
                <ProjectsShadow id='profile-shadow'/>
            </defs>
            <circle class='fill-primary shadow' cx='37.86' cy='137.86' r='35.86'></circle>
            <circle class='fill-primary shadow' cx='190.09' cy='31.21' r='46.83' ></circle>
            <rect class='fill-primary shadow' x='49.46' y='35.17' width='134.6' height='102.36' rx='6.63'></rect>
            <circle cx='74.85' cy='65.06' r='17.86'></circle>
            <circle cx='147.1' cy='112.16' r='4.27'></circle>
            <rect x='57.26' y='92.88' width='36' height='3.24' rx='1'></rect>
            <rect x='57.26' y='103.69' width='36' height='3.24' rx='1'></rect>
            <rect x='57.26' y='114.26' width='36' height='3.24' rx='1'></rect>
            <rect x='143.1' y='45.38' width='13' height='13' rx='3'></rect>
            <rect x='160.76' y='45.79' width='13' height='13' rx='3'></rect>
            <circle cx='128.47' cy='112.25' r='4.27'></circle>
            <circle cx='165.1' cy='112.16' r='4.27'></circle>
        </svg>
    )
}

export default ProfileAnimation