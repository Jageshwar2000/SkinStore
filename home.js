
//first div data 
var sun=[{"img":"https://static.thcdn.com/images/small/webp//productimg/original/13815557-1675014853378724.jpg","name":"EltaMD UV Sheer Broad-Spectrum SPF50+ 3 oz","desc":"20% off with code: JULY4","rating":"5","price":"41","category":"sun"},
{"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14270983-8145044377570537.jpg","name":"EltaMD Oil-in-Gel Cleanser 3.4 fl. oz Spectrum SPF46","desc":"20% off with code: JULY4","rating":"4","price":"34","category":"sun"},
{"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370303-1255014851959274.jpg","name":"EltaMD UV Clear Broad-Spectrum SPF46","desc":"20% off with code: JULY4","rating":"3","price":"41","category":"sun"},
{"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370312-1945014852424127.jpg","name":"EltaMD UV Clear Tinted Broad-Spectrum SPF46","desc":"20% off with code: JULY4","rating":"3","price":"43","category":"sun"},
// {"img":"https://static.thcdn.com/images/large/webp//productimg/960/960/12538013-4764765050522444.jpg","name":"EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)","desc":"20% off with code: JULY4","rating":"5","price":"80","category":"sun"},
// {"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13434840-9224904450803557.jpg","name":"EltaMD Exclusive UV Clear Tinted and Untinted Duo (Worth $76.00)","desc":"20% off with code: JULY4","rating":"4","price":"68","category":"sun"}
];
// all product aaray
var all=[{"img":"https://static.thcdn.com/images/small/webp//productimg/original/13222912-3854900555458981.jpg","name":"PCA SKIN Everyday Essentials Regimen","desc":"20% off with code: JULY4","rating":"5","price":"255","category":"skin"},
{"img":"https://static.thcdn.com/images/small/webp//productimg/original/13434846-3564904452652379.jpg","name":"PCA SKIN Exclusive Hydrating Toner Duo","desc":"20% off with code: JULY4","rating":"4","price":"51","category":"skin"},
{"img":"https://static.thcdn.com/images/small/webp//productimg/original/14215550-8765038188494487.jpg","name":"PCA SKIN Vitamin B3 Eye Brightening Cream 0.46 oz","desc":"20% off with code: JULY4","rating":"4","price":"84","category":"skin"},
{"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13434843-5104904451120477.jpg","name":"PCA SKIN Exclusive Dry Skin Duo","desc":"20% off with code: JULY4","rating":"4","price":"162","category":"skin"},
// {"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13434849-1514904451995583.jpg","name":"PCA SKIN Exclusive Cleanse and Hydrate Duo","desc":"20% off with code: JULY4","rating":"4","price":"88","category":"skin"},
// {"img":"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13434844-2754904451273813.jpg","name":"PCA SKIN Exclusive Sensitive Skin Duo","desc":"20% off with code: JULY4","rating":"4","price":"90","category":"skin"},
// {"img":"https://static.thcdn.com/images/small/webp//productimg/original/13434844-2754904451273813.jpg","name":"PCA SKIN Exclusive Sensitive Skin Duo","desc":"20% off with code: JULY4","rating":"4","price":"90","category":"skin"},
// {"img":"https://static.thcdn.com/images/small/webp//productimg/original/13434845-8594904451438600.jpg","name":"PCA SKIN Exclusive Acne Duo","desc":"20% off with code: JULY4","rating":"4","price":"93","category":"skin"},
// {"img":"https://static.thcdn.com/images/small/webp//productimg/original/13434848-1224904451856254.jpg","name":"PCA SKIN Exclusive Cleanse and Tone Duo","desc":"20% off with code: JULY4","rating":"5","price":"77","category":"skin"},
// {"img":"https://static.thcdn.com/images/small/webp//productimg/original/13434847-5624904451707481.jpg","name":"PCA SKIN Exclusive Cleanse and Treat Duo","desc":"20% off with code: JULY4","rating":"4","price":"75","category":"skin"}
];
function updateDisplay(array){   
array.forEach(function(element,index,array){
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
});
};
var divm=document.querySelector("#pro");
updateDisplay(sun,divm);
var divm=document.querySelector("#skin");
updateDisplay(all,divm)
var divm=document.querySelector("#pro-1");
updateDisplay(all,divm);