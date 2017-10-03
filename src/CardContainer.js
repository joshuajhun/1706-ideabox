import React from 'react';
import IdeaCard from './IdeaCard';

const CardContainer = ({ ideas, deleteIdea }) => {

  const ideaCards = ideas.map(idea => <IdeaCard {...idea} key={idea.id} deleteIdea={deleteIdea} /> )

  return (
    <div>
      { ideaCards }
    </div>
  )
}

export default CardContainer;
