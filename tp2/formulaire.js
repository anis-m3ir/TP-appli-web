function validation(){
	var nom=document.getElementById("nom").value;
	var nomLong=document.getElementById("nom").value.length;
	var prenom=document.getElementById("prenom").value.length;
	var addresse=document.getElementById("adres").value.length;
	var mail=document.getElementById("mail").value.length;

	
if(nomLong != 0 && prenom != 0 && addresse != 0 && mail != 0){


	if(nomLong < 5){
		document.getElementById("erreur").innerHTML="Le nom doit contenir au moin 5 caractères ";
	}

	else if(prenom < 5){
		document.getElementById("erreur").innerHTML="Le prenom doit contenir au moin 5 caracteres "
	}

	else if(addresse < 5){
	document.getElementById("erreur").innerHTML="L'adresse doit contenir aumoin 5 caractères"
	}
	else if(mail < 5){
		document.getElementById("erreur").innerHTML="Votre mail doit contenir aumoin 5 caractères"
	}
	else  {
		document.getElementById("erreur").remove("erreur");
		document.getElementById("resultat").innerHTML="Bonjour "+nom;
	}
}
else{

	document.getElementById("erreur").innerHTML="La saisie est obligatoire";
}
}