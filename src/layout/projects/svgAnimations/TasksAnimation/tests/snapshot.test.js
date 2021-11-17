import { shallow } from 'enzyme';
import TasksAnimation from '../TasksAnimation'

describe('TasksAnimation snapshot tests', () => {
    const createWrapper = () => shallow(
        <TasksAnimation />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})