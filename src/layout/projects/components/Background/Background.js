import ProfileBlob from '@projects/icons/ProfileBlob'
import RestaurantBlob from '@projects/icons/RestaurantBlob'
import TasksBlob from '@projects/icons/TasksBlob'
import './Background.scss'
import ExtensionsBlob from '@projects/icons/ExtensionsBlob'
import ChatBlob from '@projects/icons/ChatBlob'

const Background = () => {
    return(
        <div className='background'>
            <RestaurantBlob />
            <ProfileBlob />
            <TasksBlob />
            <ExtensionsBlob />
            <ChatBlob />
        </div>
    )
}

export default Background