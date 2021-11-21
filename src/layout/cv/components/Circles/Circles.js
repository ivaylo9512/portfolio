import Circle from '@svgIcons/Circle';
import './Circles.scss';

const Circles = () => {
    const c = ({ u = 129, l= 1, container }) => Array.from({ length: l}, (c, i) => 
        <Circle key={container + i} viewBoxUnit={u}/>)

    return(
        <div className='circles'>
            <div className='top-project-circles'>
                {c({ l: 2, container: 'top-project-circles' })}
            </div>
            <div className='top-left-circles'>
                {c({ l: 2, container: 'top-left-circles' })}
                {c({ l: 1, u: 98, container: 'top-left-circles' })}
            </div>
            <div className='top-right-circles'>
                {c({ l: 3, container: 'top-right-circles' })}
            </div>
            <div className='top-spiral'>
                {c({ l: 6, container: 'top-spiral' })}
            </div>
            <div className='bottom-spiral'>
                {c({ l: 10, container: 'bottom-spiral' })}
            </div>
            <div className='bottom-circles'>
                {c({ l: 3, container: 'bottom-circles' })}
            </div>
            <div className='bottom-project-circles'>
                {c({ l: 2, container: 'bottom-project-circles' })}
            </div>
        </div>
    )
}

export default Circles