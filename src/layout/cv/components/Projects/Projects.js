import Project from '../Project/Project';
import './Projects.scss';

const Projects = () => {
    return(
        <div className='projects'>
            {projectsInfo.map(p => 
                <Project key={p.name} height={310} width={310 * 1.6 * p.ratio} name={p.name} repo={p.repo} info={p.info} />)
            }
        </div>
    )
}

export default Projects

const projectsInfo = [
    { 
        repo: 'restaurant-app-with-chat-long-polling-server', 
        info: 'Long polling restaurant app with integrated chat',
        name: 'Restaurant App',
        ratio: 1
    },
    { 
        repo: 'restaurant-app-with-chat-javaFx-desktop-app-3-designs-client', 
        info: 'Desktop client for restaurant app',
        name: 'Restaurant Client Desktop',
        ratio: 59.5 / 46
    },
    { 
        repo: 'chat-application-web-sockets-server', 
        info: 'Chat app with websockets and spring',
        name: 'Chat App',
        ratio: 1
    },
    { 
        repo: 'chat-application-client-react', 
        info: 'Chat app web application with React',
        name: 'Chat App Web',
        ratio: 1
    },
    { 
        repo: 'tasks-app-client-next', 
        info: 'Task app with graphql and react',
        name: 'Task App',
        ratio: 1
    }
]