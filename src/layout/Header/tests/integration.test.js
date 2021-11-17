import animations from 'app/slices/animationsSlice';
import { createTestStore } from 'app/store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Header from '../Header';

const store = createTestStore({
    reducers: {
        animations
    },
    preloadedState: {
        animations: {
            isProjects: false
        }
    }
})

describe('Header integration tests', () => {
    beforeEach(() => {
        store.dispatch({ type: 'reset' });
    })

    const createWrapper = () =>
        mount(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    

    it('should toggle sections', () => {
        const wrapper = createWrapper()
        
        wrapper.findByTestid('sections-toggle').props().onClick();

        expect(store.getState().animations.isProjectsSection).toBe(true);
    })

    it('should display cv button', () => {
        const wrapper = createWrapper()
        
        wrapper.findByTestid('sections-toggle').props().onClick();
        wrapper.update();

        expect(wrapper.findByTestid('projects').exists()).toBe(false);
        expect(wrapper.findByTestid('cv').exists()).toBe(true);
    })
    
    it('should display projects button on render', () => {
        const wrapper = createWrapper()
        
        expect(wrapper.findByTestid('cv').exists()).toBe(false);
        expect(wrapper.findByTestid('projects').exists()).toBe(true);
    })
})