import React from 'react';

const IdeaCard = ({ title, description, id, deleteIdea }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <button onClick={ () => deleteIdea(id) } >
      Delete
    </button>
  </div>
)

export default IdeaCard;
