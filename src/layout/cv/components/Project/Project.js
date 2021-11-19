import Circle from '@svgIcons/Circle';
import './Project.scss';
import Github from 'svgIcons/Github';
import Rect from '@svgIcons/Rect';
import TabLink from '@cv/components/TabLink/TabLink';

const Project = ({ height, width, name, repo, info }) => {
    return(
        <div className='project'>
            <div className='content'>
                <p className='name'>{name}</p>
                <div className='github-container'>
                    <Github />
                    <TabLink shouldMatch={true} href={`https://github.com/ivaylo9512/${repo}`}>
                        Github
                    </TabLink>
                </div>
                <div className='info'>
                    <Circle />
                    <p>{info}</p>
                </div>
            </div>
            <div className='clip'>
                <Circle />
            </div>
            <Rect height={height} width={width} />
        </div>
    )
}
export default Project