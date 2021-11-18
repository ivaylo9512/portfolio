import { shallow } from 'enzyme';
import App from '../App';
import * as Redux from 'react-redux';

describe('App unit tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <App />
        )
    }

    it('should set className on projects to true', () => {
        const wrapper = createWrapper(true);

        expect(wrapper.findByTestid('app').props().className).toEqual('app projects-section');
    })

    it('should not set className on projects to false', () => {
        const wrapper = createWrapper(false);

        expect(wrapper.findByTestid('app').props().className).toEqual('app ');
    })
})