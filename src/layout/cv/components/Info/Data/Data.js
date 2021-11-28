import Phone from '@svgIcons/Phone';
import TabLink from '@cv/components/TabLink/TabLink';
import ProfileGit from '@svgIcons/ProfileGit';
import Brush from '@svgIcons/Brush';
import Age from '@svgIcons/Age';
import User from '@svgIcons/User';
import Name from '@svgIcons/Name';

const Data = () => {
    return(
        <div className='data'>
            <div className='name'>
                <User />
                <Name />
            </div>
            <div>
                <Brush />
                Sofia
            </div>
            <div>
                <TabLink shouldMatch={true} href={'https://github.com/ivaylo9512'}>
                    Github
                </TabLink>
                <ProfileGit />
            </div>
            <div>
                <Age />
                26
            </div>
            <div className="phone">
                0886892842
                <Phone />
            </div>
        </div>     
    )
}

export default Data