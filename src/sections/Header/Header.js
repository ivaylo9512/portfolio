import { isProjectsSection, toggleSections } from 'app/slices/animationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from 'svgIcons/Arrow';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch(); 
    const isProjects = useSelector(isProjectsSection);

    const onToggleSections = () => {
        dispatch(toggleSections());
    }

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a>
                            <Arrow />
                        </a>
                    </li>
                    <li>
                        <a onClick={onToggleSections}>
                            {isProjects 
                                ? 'cv' 
                                : 'Projects'
                            }
                        </a>
                    </li>
                    <li>
                        <a>
                            <Arrow />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header