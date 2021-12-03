import { shallow } from 'enzyme';
import Data from '../Data';

describe('Data snapshot tests', () => {
    const createWrapper = () => shallow(
        <Data />
    );

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})