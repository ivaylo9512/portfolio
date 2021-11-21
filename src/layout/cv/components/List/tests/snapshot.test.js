import List from '../List';
import { shallow } from 'enzyme';
import Ribon from '@cv/components/Ribon/Ribon';

describe('List snapshot tests', () => {
    const createWrapper = () => shallow(
        <List name='test-name' className='test-class'>
            <Ribon />
        </List>
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});