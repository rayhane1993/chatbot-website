import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Recherche des formations",
      handler: props.actionProvider.handleRechercheDeFormation,
      id: 1,
    },
    
    {
      text: "Packs personalisés",
      handler: props.actionProvider.handlePacksPersonalisés, 
      id: 2,
    },

    {
      text: "Catalogue des formations",
      handler: props.actionProvider.handleCataloguedesFormations, 
      id: 3,
    },

    {
      text: "Prix des formations",
      handler: props.actionProvider.handlePrixdesFormations, 
      id: 4,
    },

    {
      text: "Règlement interne",
      handler: props.actionProvider.handleRèglementinterne, 
      id: 5,
    },
    {
      text: "Nos partenaires",
      handler: props.actionProvider.handleNospartenaires, 
      id: 6,
    },

    {
      text: "Autres",
      handler: props.actionProvider.handleAutres, 
      id: 7,
    },

    {
      text: "Types de formation",
      handler: props.actionProvider.handleTypesdeformation, 
      id: 8,
    },

    
    {
      text: "Joindre GS Academy et devenir un formateur",
      handler: props.actionProvider.handleFormateur, 
      id: 8,
    },

    {
      text: "Durée des formations",
      handler: props.actionProvider.handleDurée, 
      id: 9,
    },
 
    

  
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
