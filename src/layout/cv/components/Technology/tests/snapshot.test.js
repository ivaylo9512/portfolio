import Technology from '../Technology';
import { shallow } from 'enzyme';
import Rect from '@svgIcons/Rect';

describe('Technology snapshot tests', () => {
    const createWrapper = () => shallow(
        <Technology icon={<Rect />}/>
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});