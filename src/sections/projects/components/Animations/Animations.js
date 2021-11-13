import RestaurantAnimation from "@projects/icons/RestaurantAnimation/RestaurantAnimation"
import ChatAnimation from "@projects/icons/ChatAnimation/ChatAnimation"
import "./Animations.scss"
import ExtensionsAnimation from "@projects/icons/ExtensionsAnimation/ExtensionsAnimation"
import TasksAnimation from "@projects/icons/TasksAnimation/TasksAnimation"
import { useState } from "react"
import ProjectsShadow from "sections/projects/svgFilters/ProjectsShadow"

const Animations = () => {
    const [transform, setTransform] = useState(0);

    return(
        <div style={{transform}} className="animations">
            <RestaurantAnimation setTransform={setTransform}/>
            <ChatAnimation setTransform={setTransform}/>
            <ExtensionsAnimation setTransform={setTransform}/>
            <TasksAnimation setTransform={setTransform}/>
            <ProjectsShadow setTransform={setTransform}/>
        </div>
    )
}

export default Animations