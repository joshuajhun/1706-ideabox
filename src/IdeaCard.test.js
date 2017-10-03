import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import IdeaCard from './ideaCard'

describe('IdeaCard', () => {
  it('should match the IdeaCard snapshot', () => {
    const renderedComponent = shallow(<IdeaCard title="changed"
                                                description='programming is hard' />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have a different title', () => {
    const renderedComponent = shallow(<IdeaCard title="diff title"
                                                description='programming is hard' />)

    expect(renderedComponent).toMatchSnapshot()
  })
});
