import { shallow } from "enzyme";
import Animations from "../Animations"

describe('Animations snapshot tests', () => {
    const createWrapper = () => shallow(
        <Animations />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})