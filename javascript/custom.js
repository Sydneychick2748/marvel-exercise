
// i need a  varable that will chnange the time stamp every time there is a fetch using counter ++
// also need to find the position in json object to find spider-girl and then filter to get the images i need 
 
//  apiKey= "7bbfaa896f69763237967b85f71e2e6f";
//  pKey ="eaedb4c96d5bb119132727359cb054f51a4cb658";
// ts = 1;
// hash = aee8bf6d287177014ce08d632548aae0

 async function marvelBtn(e){
     e.preventDefault();
     let ts = 1;
     var name = $("#hero-name").val();
    let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${1}&apikey=7bbfaa896f69763237967b85f71e2e6f&hash=aee8bf6d287177014ce08d632548aae0`)
    let data = await response.json();
     console.log(data);

    $(".flex-container").empty();
    

let  marvelData= data.data.results.map((result) =>
    $(".flex-container").append(
      `<div class="cards"><img src = '${result.thumbnail.path}.${result.thumbnail.extension}' alt = 'image of ${result.name}'/> ${result.name}  ${result.description} </div>`
    )
  );
}
$("#hero-name").keypress(function (e) {
  if (e.which == 13) {
    marvelBtn(e);
  }  
   
});

  
     
 $(".button").on("click",function(e){
      
   marvelBtn(e);
});



