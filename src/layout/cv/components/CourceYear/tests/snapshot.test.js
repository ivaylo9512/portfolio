import CourceYear from '../CourceYear';
import { shallow } from 'enzyme';

describe('CourceYear snapshot tests', () => {
    const createWrapper = () => shallow(
        <CourceYear />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});