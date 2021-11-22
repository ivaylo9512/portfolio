import Shadow from '@cv/svgFilters/Shadow'
import './FiltersRoot.scss'

const FiltersRoot = () => {
    return(
        <svg className='svg-root' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
            <defs>
                <Shadow id='shape-shadow' dy='1.949' dx='0.45' floodOpacity='0.35' stdDeviation='2.646' />
                <Shadow id='year-icon-shadow' dy='1.949' dx='0.45' floodOpacity='1' stdDeviation='12.646' />
                <Shadow id='project-shadow' dy='3.549' dx='0.45' floodOpacity='0.45' stdDeviation='2.646' />
                <Shadow id='name-shadow' dy='0.974' dx='0.225' floodOpacity='0.35' stdDeviation='2' />
                <Shadow id='circle-shadow' dy='3.549' dx='0.45' floodOpacity='0.55' stdDeviation='5.646' />
                <Shadow id='dot-shadow' dy='1.949' dx='0.45' floodOpacity='0.55' stdDeviation='4.646' />
                <Shadow id='black-shadow' dy='3.249' dx='0.45' floodOpacity='0.75' stdDeviation='6.646' />
                <Shadow id='white-shadow' dy='1.949' dx='0.45' floodOpacity='0.55' stdDeviation='3.646' />
                <Shadow id='react-shadow' dy='9.949' dx='0.45' floodOpacity='0.55' stdDeviation='21.646' />
                <Shadow id='github-shadow' dy='0.974' dx='0.225' floodOpacity='0.35' stdDeviation='1' />
                <Shadow id='background-circle-shadow' dy='0' dx='0' floodOpacity='0.68' stdDeviation='4.583' />
            </defs>
        </svg>
    )
}

export default FiltersRoot