

$.ajax({
    method: 'GET',
    url: 'https://api.movie.com.uy/api/shows/rss/data' ,
    crossDomain: true,
    dataType: 'json'
})
.done(function(data) {
  
    
       for(i=0;i<data.contentCinemaShows.length;i++){
        console.log(data.contentCinemaShows[i]);
        
        $("#container").html($( "#container").html() +"  <button id='movie"+i+"' class='movie'  onclick='abrir("+i+")' ></button> ")
        console.log($("#movie"+i))
        $("#movie"+i).css("background","url("+data.contentCinemaShows[i].posterURL +")")
        $("#movie"+i).css("background-repeat","no-repeat");
        $("#movie"+i).css("background-size","contain");
        let wt=$("#movie"+i).css("width")*500/350;
        $("#movie"+i).css("height",wt+"px");
         $("#container").html($( "#container").html()+ " <div class='overlay' id='overlay"+i+"'><div class='popup' id='popup"+i+"' ><button href='#' class='btn-cerrar-popup'  onclick='cerrar("+i+")'>X</button><div id='date"+i+"'></div></div></div>")
         for(j=0;j<data.contentCinemaShows[i].cinemaShows.length;j++){ 
            $("#date"+i).html($("#date"+i).html()+"<div>En Cine : "+ data.contentCinemaShows[i].cinemaShows[j].cinema+"</div>");
              for (k=0;k <data.contentCinemaShows[i].cinemaShows[j].shows.length;k++){
                 
                    $("#date"+i).html($("#date"+i).html()+"<div> Fecha :"+ data.contentCinemaShows[i].cinemaShows[j].shows[k].timeToDisplay+"</div>");
           
                }
                
             }
    
        
        }
    } 
 );



 function cerrar(id) {
    overlay = document.getElementById('overlay'+id),
    popup = document.getElementById('popup'+id),
    overlay.classList.remove("active");
    popup.classList.remove("active")
    
}


function abrir(id){

    overlay = document.getElementById('overlay'+id),
    popup = document.getElementById('popup'+id),
    overlay.classList.add('active');
    popup.classList.add('active');



}


 