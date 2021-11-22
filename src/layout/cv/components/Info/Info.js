import { isProjectsSection } from 'app/slices/animationsSlice';
import { useSelector } from 'react-redux';
import GithubSquare from '@svgIcons/GithubSquare';
import './Info.scss';
import ProfileImage from './profile-image.png';
import Phone from '@svgIcons/Phone';

const Info = () => {
    const isProjects = useSelector(isProjectsSection);

    return(
        <div className='profile-info'>
            <div className='image-container'>
                <img alt='profile' src={ProfileImage} />
            </div>
            <div className='data'>
                <div className="phone">
                    <Phone />
                    0886892842
                </div>
                <div>
                    <GithubSquare />
                    <a data-testid='github-link' tabIndex={isProjects ? '-1' : undefined} href='https://github.com/ivaylo9512'>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Info