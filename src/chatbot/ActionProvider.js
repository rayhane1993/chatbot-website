
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
    const message2 = this.createChatBotMessage("**ISTQB: 600dt **Selenium: 700 dt **Scrum Master: 700 dt **Soft skills: 700 dt **RPA: coming soon");
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
    const message5 = this.createChatBotMessage("Veuillez consulter le lien de téléchargement sur notre site : notre catalogue de formation (le catalogue en version pdf): lien des catalogues ");
    this.addMessageToState(message5);
  };

  partenaires = () => {
    const message6 = this.createChatBotMessage("Oui, pour plus de détails veuillez appeler l'infoline 54 754 033 ");
    this.addMessageToState(message6);
  };


  handleRechercheDeFormation = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des formations sur notre site : ",
      {
        widget: "RechercheDeFormation",
      }
    );

    this.addMessageToState(message);
   
    
  };
  handlePacksPersonalisés = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des packs personalisés sur notre site : ",
      {
        widget: "PacksPersonalisés",
      }
    );

    this.addMessageToState(message);
   
    
  };

  handleCataloguedesFormations = () => {
    const message = this.createChatBotMessage(
      " Veuillez consulter la page des catalogues sur notre site : ",
      {
        widget: "Cataloguesdesformations",
      }
    );

    this.addMessageToState(message);
   
    
  };
  handlePrixdesFormations = () => {
    const message = this.createChatBotMessage(
      "1- ISTQB: 600 dt  ",
      {
        widget: "Prixdesformations",
      }
    );

    const message1 = this.createChatBotMessage(
      " 2- Selenium: 700 dt ",
      {
        widget: "Prixdesformations",
      }
    );

    const message2 = this.createChatBotMessage(
      "3- Scrum Master: 700 dt",
      {
        widget: "Prixdesformations",
      }
    );

    const message3 = this.createChatBotMessage(
      "4- Soft skills: 700 dt",
      {
        widget: "Prixdesformations",
      }
    );

    const message4 = this.createChatBotMessage(
      "5- RPA: coming soon",
      {
        widget: "Prixdesformations",
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);

   
  
  };
  handleRèglementinterne = () => {
    const message = this.createChatBotMessage(
      " 1- L’obtention de la certification n’est pas systématique .",
      { 
        widget: "Règlementinterne",
      }

      
      
    );
    const message1 = this.createChatBotMessage(
      
      "2- Un retard de plus de 10 minutes n’est pas toléré .",
      { 
        widget: "Règlementinterne",
      }

      
      
    );
    const message2 = this.createChatBotMessage(
      
      "3- L’assiduité des candidats est contrôlée Pas de remboursement en cas d’absence .",
      { 
        widget: "Règlementinterne",
      }

      
      
    );

      
    const message3 = this.createChatBotMessage(
      
      "4- On peut planifier des sessions de formations en mode one to one mais un devis doit être négocié à l’avance .",
      { 
        widget: "Règlementinterne",
      }

      
      
    );
    const message4 = this.createChatBotMessage(
      
      "5- Les horaires de formations sont flexibles si les circonstances et le planning le permettent",
      { 
        widget: "Règlementinterne",
      }

      
      
    );

    


   this.addMessageToState(message);
   setTimeout(2000);
   this.addMessageToState(message1);
   this.addMessageToState(message2);
   this.addMessageToState(message3);
   this.addMessageToState(message4);
  
   
    
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
        " Merci de spécifier votre demande à l'adresse suivante : contact@goldshard.fr ou appelez-nous au numéro (54 754 033) ",
        {
          widget: "Autres",
        }
      );
    

    this.addMessageToState(message);
   
    
  };

  handleTypesdeformation = () => {
    const message = this.createChatBotMessage( 
      " Que des cours présentiels mais on prévoit de lancer des cours en ligne prochainement ",
      {
        widget: "Typesdeformation",
      }
    );
  

  this.addMessageToState(message);
 
  
};

handleFormateur = () => {
  const message = this.createChatBotMessage( 
    " Veuillez envoyer votre CV à l'adresse suivante : contact@goldshard.fr ",
    {
      widget: "Formateur",
    }
  );


this.addMessageToState(message);


};

handleDurée = () => {
  const message = this.createChatBotMessage( 
    " 1- Selenium : 6 jours (30h) pendant les weekends ." ,
    {
      widget: "Durée",
    }
  );

  const message2 = this.createChatBotMessage( 
    " 2- Scrum Master : 3 jours (15h) en 3 jours successifs ou en weekends .",
    {
      widget: "Durée",
    }
  );

  const message3 = this.createChatBotMessage( 
    " 3- ISTQB : 5 jours / 25 heures .",
    {
      widget: "Durée",
    }
  );

  const message4 = this.createChatBotMessage( 
    " 4- Soft Skills : 2 jours (10h) .",
    {
      widget: "Durée",
    }
  );
  const message5 = this.createChatBotMessage( 
    "**NB : Possibilité d’adaptation de cette formation en fonction des besoins des participants . ",
    {
      widget: "Durée",
    }
  );


this.addMessageToState(message);
this.addMessageToState(message2);
this.addMessageToState(message3);
this.addMessageToState(message4);
this.addMessageToState(message5);




};

  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };


}

export default ActionProvider;
