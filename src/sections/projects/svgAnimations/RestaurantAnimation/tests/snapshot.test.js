import { shallow } from 'enzyme';
import RestaurantAnimation from '../RestaurantAnimation'

describe('RestaurantAnimation snapshot tests', () => {
    const createWrapper = () => shallow(
        <RestaurantAnimation />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})