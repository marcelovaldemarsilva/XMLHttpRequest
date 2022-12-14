/*desconsiderar, porem se for usar esse evento, ele ser para executar alguma função apos a pagina carregar*/
window.addEventListener("load",addEventos);

function addEventos(){
//document.getElementById('divtb').addEventListener("click",msg);

}

/*função que recebe o evento de contrução de cada linha e indexa eles*/
function msg(linha){
var desc;
//console.log(linha);
desc= doc.entries[linha-1]['Description'];
alert(desc);
document.getElementById('divtb').innerHTML="O Description é: "+desc;
}
  