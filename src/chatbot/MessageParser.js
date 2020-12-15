class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    const testgreet= (lis,msg)=>{
      var testres=false;
      lis.forEach(element => {
        if (msg.includes(element)){
            testres=true
        }
        
      });
      return testres;
    }
    
    

    if( testgreet(["hi","good morning","bonjour","salut","hello","bnjr","bjr","cc","salut","coucou","slt","aslama","coucou"],lowercase)) {
      this.actionProvider.greet();
    }

    else if( testgreet(["prix","cout","tarif","tarification","combien","how much","costs","cost","montant"],lowercase)) {
      this.actionProvider.prix();
    }

    else if( testgreet(["téléphone","contacter","contactez","vous appelez","appeler","appelez","numero","numéro","sur quel numéro de téléphone puis-je vous joindre ?","facilité","facilite","facilitate","tranche","possibilité de paiement","paiment","payement"],lowercase)) {
      this.actionProvider.facilite();
    }
    
    else if( testgreet(["sur quel numéro de téléphone puis-je vous joindre ?","où","ou est ce que vous vous trouvez?","localisation","place","localité","position","situation","implantation","géolocalisation","locaux","locau","cordonnées","cordonnees","cordonnee","cordonnés","cordonné","gps"],lowercase)) {
      this.actionProvider.localisation();
    }

    else if( testgreet(["partenariat","partenaire"],lowercase)) {
      this.actionProvider.partenaires();
    }

    else if ( testgreet(["catalogue","consulter catalogue"],lowercase)) {
      this.actionProvider.catalogue();
    
    }
    
    else if ( testgreet([""],lowercase)) {
      this.actionProvider.free();
    
    }
  
  
    else if (lowercase.includes("Selenium") || lowercase.includes("Se")) {
      this.actionProvider.handleRechercheDeFormation();
    }
  }


}


export default MessageParser;
