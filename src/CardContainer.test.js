import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  it('should take a stub of ideas and render correctly', () => {

    const allTheIdeas = [
      {id:1, title: 'hungry now', description: 'why am I here?'},
      {id:2, title: 'its lunch time jhun', description: 'WTF?!'},
      {id:3, title: 'mike looks nice', description: 'but of course'}
    ]

    const renderedCardContainer = shallow(<CardContainer ideas={allTheIdeas} />)

    expect(renderedCardContainer.find('IdeaCard').length).toBe(3)
    expect(renderedCardContainer.find('IdeaCard').get(0).props.id).toBe(1)
    expect(renderedCardContainer.find('IdeaCard').get(0).props.title).toBe('hungry now')
    console.log(renderedCardContainer.debug());
  });
});
