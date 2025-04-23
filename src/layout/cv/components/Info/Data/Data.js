import TabLink from '@cv/components/TabLink/TabLink';
import User from '@svgIcons/User';
import Name from '@svgIcons/Name';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Data = () => {
    return(
        <div className='data'>
            <div className='name'>
                <User />
                <Name />
            </div>
            <div className="info">
                <div className='locationn'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    Sofia
                </div>
                <div>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <TabLink shouldMatch={true} href={'https://github.com/ivaylo9512'}>
                        Github
                    </TabLink>
                </div>
                <div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    27
                </div>
                <div className="phone">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <span>+359882603703</span>
                </div>
            </div>
        </div>     
    )
}

export default Data