import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'

describe('App', () => {
  it(' should render the controsl Component', () => {
    const renderedApp = shallow(<App />)

    expect(renderedApp.find('Controls').length).toEqual(1)
    expect(renderedApp.find('CardContainer').length).toEqual(1)

  });

  it('should have a default state', () => {
    const renderedApp = mount(<App />)
    const initialState = renderedApp.state().ideas

    expect(initialState).toEqual([])
  });

  it('should let us add to the app state', () => {
    const renderedApp = mount(<App />)
    const initialState = renderedApp.state().ideas
    const titleInput = renderedApp.find('.title-input')
    const descriptionInput = renderedApp.find('.description-input')
    const submitButton =  renderedApp.find('.submit-button')

    expect(initialState).toEqual([])

    titleInput.simulate('change', {target: { value: 'why tho' } })
    descriptionInput.simulate('change', {target: { value: 'programming is hard' } })

    submitButton.simulate('click')

    expect(renderedApp.state().ideas.length).toEqual(1)
  })
  


});
