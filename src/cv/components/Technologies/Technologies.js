import Technology from '@tech/Technology';
import './Technologies.css';
import Angular from 'cv/icons/Angular/Angular'
import List from 'cv/components/List/List';
import Spring from 'cv/icons/Spring';
import Aws from 'cv/icons/Aws';
import Jenkins from 'cv/icons/Jenkins';
import Redux from 'cv/icons/Redux';
import Typescript from 'cv/icons/Typescript';
import Graphql from 'cv/icons/Graphql';

const Technologies = () => {
    return(
        <List className="technologies" name='Technologies'>
            <Technology icon={<Angular />} />
            <Technology icon={<Spring />} />
            <Technology icon={<Aws />} />
            <Technology icon={<Angular />} />
            <Technology icon={<Redux />} />
            <Technology icon={<Angular />} />
            <Technology icon={<Angular />} />
            <Technology icon={<Angular />} />
            <Technology icon={<Typescript />} />
            <Technology icon={<Graphql />} />
            <Technology icon={<Angular />} />
            <Technology icon={<Angular />} />
            <span>ORM</span>
            <span>Express</span>
            <span>Ptgres</span>
            <span>node</span>
            <span>next</span>
            <span>docker</span>
            <span>Jest</span>
            <span>SASS</span>
        </List>
    )
}

export default Technologies