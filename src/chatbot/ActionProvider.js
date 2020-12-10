class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Bonjour, Bienvenue sur notre site, comment nous pouvons vous aider ?");
    this.addMessageToState(message);
  };

  free = () => {
    const message1 = this.createChatBotMessage("Veuillez envoyer votre demande à l'adresse suivante : contact@goldshard.fr ");
    this.addMessageToState(message1);
  };


  prix = () => {
    const message2 = this.createChatBotMessage("**ISTQB: 600dt **Selenium: 700dt **Scrum Master: 700dt **Soft skills: 700dt **RPA: coming soon");
    this.addMessageToState(message2);
  };

  facilite = () => {
    const message3 = this.createChatBotMessage("Oui, traiter cas par cas pour plus de détails veuillez appeler l'infoline 54 754 033");
    this.addMessageToState(message3);
  };

  localisation = () => {
    const message4 = this.createChatBotMessage("61, Rue Taher Ben Brahim Menzah 9 (localisation sur google maps)");
    this.addMessageToState(message4);
  };

  catalogue = () => {
    const message5 = this.createChatBotMessage("Veuillez consulter le lien de téléchargement sur notre site : notre catalogue de formation (le catalogue en version pdf) ");
    this.addMessageToState(message5);
  };

  partenaires = () => {
    const message6 = this.createChatBotMessage("Oui, pour plus de détails veuillez appeler l'infoline 54 754 033 ");
    this.addMessageToState(message6);
  };


  handleRechercheDeFormation = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des formations sur notre site ",
      {
        widget: "RechercheDeFormation",
      }
    );

    this.addMessageToState(message);
   
    
  };
  handlePacksPersonalisés = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des packs personalisés sur notre site ",
      {
        widget: "PacksPersonalisés",
      }
    );

    this.addMessageToState(message);
   
    
  };

  handleCataloguedesFormations = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des catalogues sur notre site ",
      {
        widget: "Cataloguesdesformations",
      }
    );

    this.addMessageToState(message);
   
    
  };
  handlePrixdesFormations = () => {
    const message = this.createChatBotMessage(
      " **ISTQB: 600dt **Selenium: 700dt **Scrum Master: 700dt **Soft skills: 700dt **RPA: coming soon ",
      {
        widget: "Prixdesformations",
      }
    );

    this.addMessageToState(message);
   
    
  };

  handleRèglementinterne = () => {
    const message = this.createChatBotMessage(
      "*** L’obtention de la certification n’est pas systématique *** Un retard de plus de 10 minutes n’est pas toléré *** L’assiduité des candidats est contrôlée *** Pas de remboursement en cas d’absence *** On peut planifier des sessions de formations en mode one to one mais un devis doit être négocié à l’avance *** Les horaires de formations sont flexibles si les circonstances et le planning le permettent ",
      {
        widget: "Règlementinterne",
      }
    );

    this.addMessageToState(message);
   
    
  };

  handleNospartenaires = () => {
    const message = this.createChatBotMessage(
      "Veuillez consulter la page de nos partenaires sur notre site",
      {
        widget: "Nospartenaires",
      }
    );


    this.addMessageToState(message);
  }
    handleAutres = () => {
      const message = this.createChatBotMessage( 
        " Merci de spécifier votre demande à l'adresse suivante: contact@goldshard.fr ou appelez-nous au numéro (54 754 033) ",
        {
          widget: "Autres",
        }
      );
    

    this.addMessageToState(message);
   
    
  };

  handleTypesdeformation = () => {
    const message = this.createChatBotMessage( 
      " Que des cours présentiels mais on prévoit de lanccer des cours en ligne prochainement ",
      {
        widget: "Typesdeformation",
      }
    );
  

  this.addMessageToState(message);
 
  
};

handleFormateur = () => {
  const message = this.createChatBotMessage( 
    " Veuillez envoyer votre CV à l'adresse suivante: contact@goldshard.fr ",
    {
      widget: "Formateur",
    }
  );


this.addMessageToState(message);


};

  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };


}

export default ActionProvider;
