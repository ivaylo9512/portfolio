import Circle from '@svgIcons/Circle';
import './Project.scss';
import Github from 'svgIcons/Github';
import TabLink from '@cv/components/TabLink/TabLink';
import { useEffect, useRef, useState } from 'react';
import useResize from 'AppRoot/hooks/useResize';

const Project = ({ height, toggleHeight, width, name, repo, info }) => {
    const project = useRef();
    const {dimensions} = useResize();
    const [toggle, setToggle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        project.current.style.paddingBottom = "30%";
        project.current.style.opacity = "0";
        project.current.style.transition = "all 0s";

        setTimeout(() => {
            project.current.style.paddingBottom = !toggle ? "30%" : "10%";
            project.current.style.opacity = 1;
            setTimeout(() => { 
                project.current.style.transition = "padding 2s, transform 0s";
            },10)
        }, 10);
    },[dimensions]);

    useEffect(() => {
        if(!isInitial){
            if(!isAnimating){
                project.current.style.paddingBottom = !toggle ? "30%" : "10%";

                setIsAnimating(true);

                setTimeout(() => {
                    setIsAnimating(false);
                }, 2000);
            }
        }
    }, [toggle]);

    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            project.current.style.paddingBottom = "10%";
            setToggle(true);

            setTimeout(() => {
                setIsAnimating(false);
                setIsInitial(false);
            }, 2000);
        }, 4000);
    }, [])

    const togglePadding = () => {
        if(!isAnimating){
            setToggle(toggle => setToggle(!toggle));
        }
    }

    return(
        <div className={`project ${toggle ? "hidden" : ""}`} onClick={togglePadding} ref={project}>
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
        </div>
    )
}
export default Project