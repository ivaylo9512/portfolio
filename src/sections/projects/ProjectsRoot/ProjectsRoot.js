import Background from "@projects/components/Background/Background"
import AnimationsRoot from "@projects/components/AnimationsRoot/AnimationsRoot"
import "./ProjectsRoot.scss"

const ProjectsRoot = () => {
    return(
        <section className="projects-root">
            <div className="scroll">
                <Background />
                <AnimationsRoot />
            </div>
        </section>
    )
}

export default ProjectsRoot