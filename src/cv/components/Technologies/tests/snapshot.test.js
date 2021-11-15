import Technologies from '../Technologies';
import { shallow } from 'enzyme';

describe('Technologies snapshot tests', () => {
    const createWrapper = () => shallow(
        <Technologies />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});