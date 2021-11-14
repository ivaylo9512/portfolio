import RestaurantAnimation from "@svgAnimations/RestaurantAnimation/RestaurantAnimation"
import ChatAnimation from "@svgAnimations/ChatAnimation/ChatAnimation"
import "./AnimationsRoot.scss"
import ExtensionsAnimation from "@svgAnimations/ExtensionsAnimation/ExtensionsAnimation"
import TasksAnimation from "@svgAnimations/TasksAnimation/TasksAnimation"
import ProfileAnimation from "@svgAnimations/ProfileAnimation/ProfileAnimation"
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper"

const Animations = () => {
    return(
        <div className="animations">
            <AnimationWrapper SvgAnimation={TasksAnimation} className="tasks"/>
            <AnimationWrapper SvgAnimation={RestaurantAnimation} className="restaurant"/>
            <AnimationWrapper SvgAnimation={ExtensionsAnimation} className="extensions"/>
            <AnimationWrapper SvgAnimation={ChatAnimation} className="chat"/>
            <AnimationWrapper SvgAnimation={ProfileAnimation} className="profile"/>
        </div>
    )
}

export default Animations