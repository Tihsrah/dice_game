var random1 = (Math.floor(Math.random(0,6)*6))+1 ;
var random2 = (Math.floor(Math.random(0,6)*6))+1 ;
var refreshed=0;
// console.log(`images\\dice${random1}.png`);
document.querySelector("img.img1").setAttribute("src",`images\\dice${random1}.png`);
document.querySelector("img.img2").setAttribute("src",`images\\dice${random2}.png`);
if(random1>random2){
    document.querySelector("div.title h1").textContent="🚩 Player 1 Wins!";
    refreshed++;
}else if(random2>random1){
    document.querySelector("div.title h1").textContent="Player 2 Wins! 🚩";
    refreshed++;
}else{
    document.querySelector("div.title h1").textContent="Draws!";
    refreshed++;
}
if(refreshed==0){
    document.querySelector("div.title h1").textContent="Refresh Me!";
}
