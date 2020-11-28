$(document).ready(function(){
	//intercepte le boutton valider et ecris ds la modal
  $("#Ajouter").click(function(event){
	event.preventDefault();
	//var city = $("#adresse").val();
	

  	if($('#nom').val() != "" && $('#prenom').val() != "" && $('#date').val() != "" && $('#adresse').val() != "" && $('#mail').val() != ""){
   		$('#myModal').modal({show : true})
   		$('.modal-title').text("Bienvenue " + $('#nom').val() );
   		$('.modal-body').html("aaaaaaaaaaaaa");
			
		   
			//ajout a la table 
		   contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#adresse').val(), $('#mail').val());
		   //stockage data en string -----> stringify---->js object to String
		    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
		   
		   AfficherList();


	}
		   
	  

   else {
   	$('#myModal').modal({show : true})
   $('.modal-title').text("Erreur");
   $('.modal-body').text("la saisie de touts les champs est obligatoire");

   }

   	
  });
  

});
//interception du boutton GPS
window.onload = function (){
	document.querySelector('#gps').addEventListener("click", function (event) {
		getLocation();
	});


};
//calcul nbr de carac en temps reel "onkeyup jquery"
$(document).keyup(function () {
	var t = document.getElementById('nom').value.length;
		document.getElementById('compteur').innerHTML = t;
   var t = document.getElementById('prenom').value.length;
		document.getElementById('compteur1').innerHTML = t;
   var t = document.getElementById('mail').value.length;
		document.getElementById('compteur2').innerHTML = t;
});

function AfficherList() {
	//parse ----> String to js object
	var contactList = JSON.parse(localStorage.getItem("contactList"));
	for (var index in contactList) {
	  document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
		
		'<tr>'+
		'<th scope="row">'+index+'</th>'+
		'<td>'+ contactList[index].nom +'</td>'+
		'<td>'+ contactList[index].prenom +'</td>'+
		'<td>'+ contactList[index].date +'</td>'+
		'<td>'+ contactList[index].adresse +'</td>'+
		'<td><a href=mailto:>'+ contactList[index].mail +'</a></td>'+
	  '</tr>'
	}
  }