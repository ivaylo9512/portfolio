import Circles from '../Circles';
import { shallow } from 'enzyme';

describe('Circles snapshot tests', () => {
    const createWrapper = () => shallow(
        <Circles />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});