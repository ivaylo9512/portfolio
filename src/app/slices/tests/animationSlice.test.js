import reducer, { toggleSections, setVisited, resetVisited, changeSlide } from '../animationsSlice';

const slides = ['first', 'second', 'third'];

const initialState = {
    currentVisited: null,
    isProjectsSection: false,
    currentSlideIndex: 0,
    currentSlide: slides[0]
}


describe('animation slice tests', () => {
    it('should toggleSection', () => {
        expect(reducer(initialState, toggleSections())).toEqual({
            ...initialState,
            isProjectsSection: true
        })
    })

    it('should changeSlide', () => {
        expect(reducer(initialState, changeSlide(+1))).toEqual({
            ...initialState,
            currentSlideIndex: 1,
            currentSlide: 'second'
        })
    })

    it('should setVisited', () => {
        expect(reducer(initialState, setVisited('extensions'))).toEqual({
            ...initialState,
            currentVisited: 'extensions'
        })
    })

    it('should resetVisited', () => {
        expect(reducer({
            ...initialState,
            currentVisited: 'extensions'
        }, resetVisited())).toEqual(initialState)
    })
})
