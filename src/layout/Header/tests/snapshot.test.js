import { shallow } from 'enzyme';
import Header from '../Header';
import * as Redux from 'react-redux';

describe('Header snapshot tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        jest.spyOn(Redux, 'useDispatch').mockReturnValue(jest.fn());
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Header />
        )
    }

    it('should match snapshot with projects secton', () => {
        const wrapper = createWrapper(true);

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot with cv secton', () => {
        const wrapper = createWrapper(false);

        expect(wrapper).toMatchSnapshot();
    })
})