import { shallow } from 'enzyme';
import ProfileAnimation from '../ProfileAnimation'

describe('ProfileAnimation snapshot tests', () => {
    const createWrapper = () => shallow(
        <ProfileAnimation />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})