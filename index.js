let home=document.getElementById('home-score');
let away=document.getElementById('away-score');
function addOneHome(){
    let original=home.textContent
    original=Number(original)
    home.textContent=original+1
}
function addTwoHome(){
    let original=home.textContent
    original=Number(original)
    home.textContent=original+2
}
function addThreeHome(){
    let original=home.textContent
    original=Number(original)
    home.textContent=original+3
}
function addOneAway(){
    let original=away.textContent;
    original=Number(original);
    away.textContent=original+1
}
function addTwoAway(){
    let original=away.textContent
    original=Number(original)
    away.textContent=original+2
}
function addThreeAway(){
    let original=away.textContent
    original=Number(original)
    away.textContent=original+3
}