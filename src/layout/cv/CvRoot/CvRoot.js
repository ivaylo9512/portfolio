import Background from '@cv/components/Background/Background';
import LeftPanel from '@cv/components/LeftPanel/LeftPanel.js';
import RightPanel from '@cv/components/RightPanel/RightPanel.js';
import FiltersRoot from '@cv/svgFilters/FiltersRoot/FiltersRoot';
import Info from '../components/Info/Info';
import './CvRoot.scss';
import { useEffect, useState } from 'react';

const CvRoot = () => {
    const [animated, setAnimated] = useState("animate");

    useEffect(() => {
        document.documentElement.style.setProperty("--ratio", window.innerHeight / document.body.scrollHeight)
        setTimeout(() => setAnimated(() => "animated"), 400);
    }, [])
    return(
        <section className='cv first-style'>
            <div className={`translate-wrapper ${animated}`}>
                <FiltersRoot />
                <Info />
                <Background />
                <div className='panels'>
                    <LeftPanel />
                    <RightPanel />
                </div>
            </div>
        </section>
    )

};

export default CvRoot