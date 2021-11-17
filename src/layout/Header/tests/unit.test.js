import { shallow } from 'enzyme';
import Header from '../Header';
import * as Redux from 'react-redux';
import { toggleSections } from 'app/slices/animationsSlice';

describe('Header unit tests', () => {
    let selectorSpy;
    const dispatchMock = jest.fn();

    beforeEach(() => {
        jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatchMock);
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Header />
        )
    }

    it('should dispatch on sections toggle', () => {
        const wrapper = createWrapper(true);

        wrapper.findByTestid('sections-toggle').props().onClick();

        expect(dispatchMock).toHaveBeenCalledWith(toggleSections());
    })

    it('should render cv button toggle', () => {
        const wrapper = createWrapper(true);

        expect(wrapper.findByTestid('cv').exists()).toBe(true);
    })

    it('should render projects button toggle', () => {
        const wrapper = createWrapper(false);

        expect(wrapper.findByTestid('projects').exists()).toBe(true);
    })
})