import { shallow } from 'enzyme';
import PorfileImage from '../ProfileImage';

describe('PorfileImage snapshot tests', () => {
    const createWrapper = () => shallow(
        <PorfileImage />
    );

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})