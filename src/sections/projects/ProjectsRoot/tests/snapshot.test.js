import { shallow } from "enzyme";
import ProjectsRoot from "../ProjectsRoot"

describe('ProjectsRoot snapshot tests', () => {
    const createWrapper = () => shallow(
        <ProjectsRoot />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})