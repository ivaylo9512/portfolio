import List from '../List';
import { shallow } from 'enzyme';

describe('List snapshot tests', () => {
    const createWrapper = () => shallow(
        <List />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});