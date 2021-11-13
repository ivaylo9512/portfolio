import Technology from 'cv/components/Technology/Technology';
import './Technologies.scss';
import Angular from 'cv/icons/Angular'
import List from 'cv/components/List/List';
import Spring from 'cv/icons/Spring';
import Aws from 'cv/icons/Aws';
import Jenkins from 'cv/icons/Jenkins';
import Redux from 'cv/icons/Redux';
import Typescript from 'cv/icons/Typescript';
import Graphql from 'cv/icons/Graphql';
import ReactSvg from 'cv/icons/ReactSvg';
import Ws from 'cv/icons/Ws';
import TechnologiesSvg from 'cv/icons/TechnologiesSvg';
import NodeJs from 'cv/icons/NodeJs';
import Pgres from 'cv/icons/Pgres';
import NextJs from 'cv/icons/Nextjs';
import Express from 'cv/icons/Express';
import Jest from 'cv/icons/Jest';
import Sass from 'cv/icons/Sass';
import Orm from 'cv/icons/Orm';
import Docker from 'cv/icons/Docker';

const Technologies = () => {
    
    const getIcons = () => [ 
        <ReactSvg/>, <Spring/>, <Aws/>, <Jenkins/>, 
        <Redux/>, <Angular/>, <Ws/>, <Angular/>, 
        <Typescript/>, <Graphql/>, <Angular/>, <Angular/> 
    ].map(i => <Technology key={i.type.name} viewBox="129 129" icon={i} />)
            
    return(
        <List className="technologies" name={<TechnologiesSvg />}>
            {getIcons()}
            <div className="names">
                <div><Orm /></div>
                <div><Express /></div>
                <div><Pgres /></div>
                <div><NodeJs /></div>
                <div><NextJs /></div>
                <div><Docker /></div>
                <div><Jest /></div>
                <div><Sass /></div>
            </div>
        </List>
    )
}

export default Technologies