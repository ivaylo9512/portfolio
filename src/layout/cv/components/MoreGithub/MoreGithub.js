import Rect from '@svgIcons/Rect';
import Github from '@svgIcons/Github';
import './MoreGithub.scss';
import TabLink from '@cv/components/TabLink/TabLink';

const MoreGithub = () => {
    return(
        <div className='more-github'>
            <div className='content'>
                <Rect height='89' width='328'/>
                <TabLink shouldMatch={true} href={'https://github.com/ivaylo9512'}> 
                    <span>More on</span>
                    <Github />
                </TabLink>
            </div>

        </div>
    )
}

export default MoreGithub