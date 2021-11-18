import App from '../App';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';

describe('App snapshot tests', () => {
    let selectorSpy;

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (isProjects) => {
        selectorSpy.mockReturnValue(isProjects);

        return shallow(
            <App />
        )
    }

    it('should match snapshot with isProjects to true', () => {
        const wrapper = createWrapper(true);

        expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot with isProjects to false', () => {
        const wrapper = createWrapper(true);

        expect(wrapper).toMatchSnapshot();
    });
})