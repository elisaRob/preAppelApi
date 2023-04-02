//c'est quoi une api?
//c'est un ensemble de méthodes de classe et de fonctions et de constantes qui sert de façade
//par laquelle un logiciel offre des services à d'autres logiciels

//le principe d'une api appliquée au web on aure:
//-le client
//-l'api
//-le serveur

//le client envoie une requête vers un serveur souvent au format à HTTP on peut lui additionner
//le JSon ou le XML pour envoyer des données vers le serveur

//Le serveur qui a des données qui est souvent reliées avec une base de données
//Elle va nous renvoyer une réponse au format HTTP avec des données au format XML ou JSON

//Grâce à JavaScript on est capable d'envoyer une requête HTTP et obtenir une réponse quasiment
//instantanément sans réactualisation de réponse de la page web

//L'API Fetch fournit une interface JavaScript pour l'accès  et la manipulation du pipeline HTTP
//comme les requêtes et les réponses

//fecth(ww.site.exemple) =>url que l'on doit contacter pour recueillir des données
//une fis que l'url est contacter on obtient ce que l'on appelle des promesses

//.then(function(reponse)){return reponse.json})
//Cette méthode nous récupère des données donc des réponses
//Cette réponse il va falloir la formater il va falloir le dire quelle est cette format de réponse
//ici on fait reponse.json attention on récupère les données au format json
//qui est le format le plus utilisé en ce moment,cela nous permet de stocker beaucoup
//d'informations facilement on peut aussi utiliser autres que le JSON le arrayBuffer() ,
//text() formData()

//une fois qu'on aura typés les données de la réponse on obtient un nouveau then derrière comme suit
//.then(function(data){console.log(data)})
//on récupère une autre promesse et là on a les datas qui vont pouvoir être traiter dans notre page web




//il va falloir contacter cette url à chaque fois qu'on obtient 5 lettres dans le input

document.querySelector("#codePostal").addEventListener('input',function(){
    //je vais pas contacter le serveur du gouvernement à chasue fois que l'utilisateur saisit une lettre dans le formulaire
    //je vais le saisir quand il contacte au moins 5 lettres
    //je vais tester le nombre de lettres qu'il y a dans la case du input
    if(this.value.length ==5){
        let url=`https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

        //on va contacter le serveur
        //on va utiliser la méthode fetch on récupère une promesse
        //on l'appelle response cette réponse il faut la formater on récupère du json
        
        fetch(url).then((response) =>
            response.json()
            .then((data) =>{
                console.log(data);
                let affichage="<ul>";
                for(let ville of data){
                    affichage +=`<li>${ville.nom}</li>`
                }
                affichage +='</ul>';
                document.querySelector("#ville").innerHTML=affichage;
            })
        )
    }
})