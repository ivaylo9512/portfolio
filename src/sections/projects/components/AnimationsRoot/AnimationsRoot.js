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
            <AnimationWrapper transalteAmount={"translate(-10%, -12%)"} SvgAnimation={RestaurantAnimation} className="restaurant-animation"/>
            <ChatAnimation />
            <ExtensionsAnimation />
            <TasksAnimation />
            <ProfileAnimation />
        </div>
    )
}

export default Animations