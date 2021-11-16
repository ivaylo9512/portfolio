import ProjectsRoot from '@projects/ProjectsRoot/ProjectsRoot';
import Header from 'sections/Header/Header';
import './App.scss';
import CvRoot from './sections/cv/CvRoot/CvRoot';
import { useSelector } from 'react-redux';
import { isProjectsSection } from 'app/slices/animationsSlice';

const App = () => {
    const isProjects = useSelector(isProjectsSection);

    return (
        <div className={`app ${isProjects ? 'projects-section' : ''}`}>
            <Header />
            <div className='transition-container'>
                <CvRoot />
                <ProjectsRoot />
            </div>
        </div>
    );
}

export default App;
