import FiltersRoot from '../FiltersRoot';
import { shallow } from 'enzyme';

describe('FiltersRoot snapshot tests', () => {
    const createWrapper = () => shallow(
        <FiltersRoot />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});