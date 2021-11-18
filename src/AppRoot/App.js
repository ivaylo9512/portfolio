import ProjectsRoot from '@projects/ProjectsRoot/ProjectsRoot';
import Header from 'layout/Header/Header';
import './App.scss';
import CvRoot from '@cv/CvRoot/CvRoot';
import { useSelector } from 'react-redux';
import { isProjectsSection } from 'app/slices/animationsSlice';

const App = () => {
    const isProjects = useSelector(isProjectsSection);

    return (
        <div data-testid='app' className={`app ${isProjects ? 'projects-section' : ''}`}>
            <Header />
            <div className='transition-container'>
                <CvRoot />
                <ProjectsRoot />
            </div>
        </div>
    );
}

export default App;
