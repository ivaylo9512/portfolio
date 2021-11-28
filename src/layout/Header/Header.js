import { changeSlide, getCurrentSlide, isProjectsSection, resetSlides, toggleSections } from 'app/slices/animationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '@svgIcons/Arrow';
import Circle from '@svgIcons/Circle';
import Rect from '@svgIcons/Rect';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch(); 
    const isProjects = useSelector(isProjectsSection);
    const currentSlide = useSelector(getCurrentSlide);

    const onToggleSections = () => {
        window.scrollTo(0, 0);
        dispatch(toggleSections());

        if(isProjectsSection){
            dispatch(resetSlides())
        }
    }

    const onChangeSlide = (byAmount) => {
        dispatch(changeSlide(byAmount))
    }

    return(
        <header className={`${currentSlide}-slide`}>
            <nav>
                <ul>
                    <ul className='left-menu'> 
                         <li>
                            <a href='/#' data-testid='sections-toggle' className='sections-toggle' onClick={onToggleSections}>
                                <Rect width={200} height={90} radius={40} />
                                <span data-testid={isProjects ? 'cv' : 'projects'}>{isProjects ? 'Cv' : 'Projects'}
                                    <Arrow />
                                </span>
                            </a>
                        </li>
                        <li className="slide-left">
                            <button onClick={() => onChangeSlide(-1)}>
                                <Circle />
                                <Arrow />
                            </button>
                        </li>

                    </ul>
                    <li className='slide-right'>
                        <button onClick={() => onChangeSlide(1)}>
                            <Circle />
                            <Arrow />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header