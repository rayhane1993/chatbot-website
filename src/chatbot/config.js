import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "GOLD SHARD Academy Bot",
  initialMessages: [
    createChatBotMessage(`Bonjour, Comment puis-je vous aider ? `, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "RechercheDeFormation",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cliquer ici pour consulter le lien",
            answer:
              "lien de la page",
            id: 1,
          },
       
        ],
      },
    },


    {
      widgetName: "PacksPersonalisés",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cliquer ici pour consulter le lien",
            answer:
              "lien de la page",
            id: 2,
          },
       
        ],
      },
    },

    {
      widgetName: "Cataloguesdesformations",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cliquer ici pour consulter le lien",
            answer:
              "lien de la page",
            id: 3,
          },
       
        ],
      },
    },

   /* {
      widgetName: "Prixdesformations",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cliquer ici pour consulter le lien",
            answer:
              "lien de la page",
            id: 4,
          },
       
        ],
      },
    },*/
    
 /*  {
      widgetName: "Règlementinterne",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Pour plus d'informations cliquer ici",
            answer:
              "lien de la page",
            id: 5,
          },
       
        ],
      },
    },*/
    {
      widgetName: "Nospartenaires",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Pour plus d'informations cliquer ici",
            answer:
              "lien de la page",
            id: 6,
          },
       
        ],
      },
    },

    /*{
      widgetName: "Durée",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Pour plus d'informations cliquer ici",
            answer:
              "lien de la page",
            id: 9,
          },
       
        ],
      },
    },*/

    

    
    
    


  ],
};

export default config;
