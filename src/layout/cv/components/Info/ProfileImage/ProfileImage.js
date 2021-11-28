import Image from './profile-image.png';

const ProfileImage = () => {
    return(
        <div className='image-container'>
            <img alt='profile' src={Image} />
        </div>
    )
}

export default ProfileImage