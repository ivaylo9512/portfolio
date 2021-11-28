import './Info.scss';
import Data from './Data/Data';
import ProfileImage from './ProfileImage/ProfileImage';

const Info = () => {
    return(
        <div className='profile-info'>
            <ProfileImage />
            <Data />
        </div>
    )
}

export default Info