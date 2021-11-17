import { isProjectsSection, toggleSections } from 'app/slices/animationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '@svgIcons/Arrow';
import Circle from '@svgIcons/Circle';
import Rect from '@svgIcons/Rect';
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
                        <a data-testid='sections-toggle' className='section-toggle' onClick={onToggleSections}>
                            <Rect width={496} height={210} radius={100} />
                            <span data-testid={isProjects ? 'cv' : 'projects'}>{isProjects ? 'Cv' : 'Projects'}
                                <Arrow />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Circle />
                            <Arrow />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header