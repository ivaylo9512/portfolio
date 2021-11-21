import { shallow } from 'enzyme';
import ExtensionsAnimation from '../ExtensionsAnimation'

describe('ExtensionsAnimation snapshot tests', () => {
    const createWrapper = () => shallow(
        <ExtensionsAnimation className='test-class' />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})