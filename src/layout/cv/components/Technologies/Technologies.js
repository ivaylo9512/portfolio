import Technology from '@cv/components/Technology/Technology';
import './Technologies.scss';
import Angular from '@svgIcons/Angular'
import List from '@cv/components/List/List';
import Spring from '@svgIcons/Spring';
import Aws from '@svgIcons/Aws';
import Jenkins from '@svgIcons/Jenkins';
import Redux from '@svgIcons/Redux';
import Typescript from '@svgIcons/Typescript';
import Graphql from '@svgIcons/Graphql';
import ReactSvg from '@svgIcons/ReactSvg';
import Ws from '@svgIcons/Ws';
import TechnologiesSvg from '@svgIcons/TechnologiesSvg';
import NodeJs from '@svgIcons/NodeJs';
import Pgres from '@svgIcons/Pgres';
import NextJs from '@svgIcons/Nextjs';
import Express from '@svgIcons/Express';
import Jest from '@svgIcons/Jest';
import Sass from '@svgIcons/Sass';
import Orm from '@svgIcons/Orm';
import Docker from '@svgIcons/Docker';
import Jwt from '@svgIcons/Jwt';
import Rest from '@svgIcons/Rest';
import Sql from '@svgIcons/Sql';

const Technologies = () => {
    
    const getIcons = () => [ 
        <ReactSvg/>, <Spring/>, <Aws/>, <Jenkins/>, 
        <Redux/>, <Angular/>, <Ws/>, <Jwt/>, 
        <Typescript/>, <Graphql/>, <Sql/>, <Rest/> 
    ].map(i => <Technology key={i.type.name} viewBox='129 129' icon={i} />)
            
    return(
        <List className='technologies' data-style='first-style' name={<TechnologiesSvg />}>
            {getIcons()}
            <div className='names'>
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