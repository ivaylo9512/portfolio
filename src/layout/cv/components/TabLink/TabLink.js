import { isProjectsSection } from 'app/slices/animationsSlice';

const TabLink = ({ shouldMatch, href, text }) => {
    const isProjects = useSelector(isProjectsSection);

    return(
        <a tabIndex={isProjects === shouldMatch ? '-1' : undefined} href={href}>{text}</a>
    )
}

export default TabLink