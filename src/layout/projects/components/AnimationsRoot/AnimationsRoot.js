import RestaurantAnimation from '@svgAnimations/RestaurantAnimation/RestaurantAnimation'
import ChatAnimation from '@svgAnimations/ChatAnimation/ChatAnimation'
import './AnimationsRoot.scss'
import ExtensionsAnimation from '@svgAnimations/ExtensionsAnimation/ExtensionsAnimation'
import TasksAnimation from '@svgAnimations/TasksAnimation/TasksAnimation'
import ProfileAnimation from '@svgAnimations/ProfileAnimation/ProfileAnimation'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'
import { useSelector } from 'react-redux';
import { getVisited } from 'app/slices/animationsSlice'

const Animations = () => {
    const visited = useSelector(getVisited);

    return(
        <div data-testid='animations' className={`animations ${visited ? visited : ''}`}>
            <AnimationWrapper SvgAnimation={TasksAnimation} className='tasks'/>
            <AnimationWrapper SvgAnimation={ProfileAnimation} className='profile'/>
            <AnimationWrapper SvgAnimation={RestaurantAnimation} className='restaurant'/>
            <AnimationWrapper SvgAnimation={ExtensionsAnimation} className='extensions'/>
            <AnimationWrapper SvgAnimation={ChatAnimation} className='chat'/>
        </div>
    )
}

export default Animations