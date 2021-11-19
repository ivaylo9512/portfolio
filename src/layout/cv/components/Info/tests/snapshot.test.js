import Info from '../Info';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';

describe('Info snapshot tests', () => {
    let selectorSpy = jest.fn();

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Info />
        )
    }

    it('should match snapshot with isProjects to true', () => {
        const wrapper = createWrapper(true);
     
        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot with isProjects to false', () => {
        const wrapper = createWrapper(false);
     
        expect(wrapper).toMatchSnapshot();
    })
});