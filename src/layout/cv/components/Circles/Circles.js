import Circle from '@svgIcons/Circle';
import './Circles.scss';

const Circles = () => {
    const c = ({ u = 129, l= 1 }) => Array.from({ length: l}, () => <Circle viewBoxUnit={u}/>)

    return(
        <div className='circles'>
            <div className='top-project-circles'>
                {c({ l: 2 })}
            </div>
            <div className='top-left-circles'>
                {c({ l: 2 })}
                {c({ l: 1, u: 98 })}
            </div>
            <div className='top-right-circles'>
                {c({ l: 3 })}
            </div>
            <div className='top-spiral'>
                {c({ l: 6 })}
            </div>
            <div className='bottom-spiral'>
                {c({ l: 10 })}
            </div>
            <div className='bottom-circles'>
                {c({ l: 3 })}
            </div>
            <div className='bottom-project-circles'>
                {c({ l: 2 })}
            </div>
        </div>
    )
}

export default Circles