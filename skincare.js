var arr=JSON.parse(localStorage.getItem("all-products"))||[];

function updateDisplay(array){ 
    var counter=0;
    array.forEach(function(element,index,array){
        if(counter===4){
            return;
        }
        var card = document.createElement("div");
        var imgt = document.createElement("img");
        var namet = document.createElement("h3");
        var desct= document.createElement("p");
        var pricet = document.createElement("p");
        var ratingt=document.createElement("p");
        var add = document.createElement("button"); 
    
        imgt.setAttribute("src",element.img);
        namet.textContent=element.name;
        desct.textContent=element.desc;
        ratingt.textContent="Ratings:"+element.rating;
        pricet.textContent="$"+element.price+".00";
        add.textContent="QUICK BUY";
        card.append(imgt,namet,desct,ratingt,pricet,add);
        divm.append(card);
        counter++;
    });
    };
    var skin=arr.filter(function(element){
        return element.category=="skin";
    });
   var divm=document.querySelector("#pro");
   updateDisplay(skin,divm);
    var divm=document.querySelector("#skin");
    updateDisplay(skin,divm);
