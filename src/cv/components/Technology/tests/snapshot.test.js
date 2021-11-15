import Technology from '../Technology';
import { shallow } from 'enzyme';

describe('Technology snapshot tests', () => {
    const createWrapper = () => shallow(
        <Technology />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});