import Languages from '../Languages';
import { shallow } from 'enzyme';

describe('Languages snapshot tests', () => {
    const createWrapper = () => shallow(
        <Languages />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});