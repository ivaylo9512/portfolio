import Ribon from '../Ribon';
import { shallow } from 'enzyme';
import Rect from '@svgIcons/Rect';

describe('Ribon snapshot tests', () => {
    const createWrapper = () => shallow(
        <Ribon name='test-name'>
            <Rect />
        </Ribon>
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});