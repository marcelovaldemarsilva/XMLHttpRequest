var request = new XMLHttpRequest();
request.responseType="json";
var doc;
var r=0;
var quantidadeInformada;


function carregarTabela(){

var trs = document.getElementById("minhaTabela").rows;
let tbody = document.getElementById('tbody'),rIndex;
var table = document.getElementById('minhaTabela');//,rIndex;
 
 if(trs.length>1){
 
    while(trs.length>0) 
    trs[1].parentNode.removeChild(trs[1]);
    carregarTabela();      

 }

request.onreadystatechange=function(){
    if(request.readyState==4 && request.status==200){
        
        doc = request.response;
        //console.log(doc);
       
     
        quantidadeInformada = parseInt(document.getElementById('quantidade').value);
        
        for(var i=0;i<quantidadeInformada;i++){
            /*doc.entries.length*/
           
            var linha;
            /*Construção da Tabela/Celulas com o FOR*/      
            let tr = tbody.insertRow();         
        
            let td_api = tr.insertCell();
            let td_auth = tr.insertCell();
            let td_category = tr.insertCell();
            let td_cors = tr.insertCell();
            let td_description = tr.insertCell();
            let td_https = tr.insertCell();
            let td_link = tr.insertCell(); 


            /*concatenando as colunas da API na tabela*/                    
            td_api.innerHTML=doc.entries[i]['API'];
            td_auth.innerHTML=doc.entries[i]['Auth'];
            td_category.innerHTML=doc.entries[i]['Category'];
            td_cors.innerHTML=doc.entries[i]['Cors'];
            td_description.innerHTML=doc.entries[i]['Description'];
            td_https.innerHTML=doc.entries[i]['HTTPS'];
            td_link.innerHTML=doc.entries[i]['Link'];
            
            /*Evento de clique em cada linha da tabela*/
            if(i==0){
            linha = tbody.rows[i];            
            linha.onclick = function(){
                rIndex = this.rowIndex;            
              
                msg(rIndex);  
                          
            }
            
            }else{
                linha =tbody.rows[i];  
                linha.onclick = function(){
                    rIndex = this.rowIndex;            
                    console.log(rIndex);  
                    msg(rIndex);  
                              
                }
            }
            
                
            
        }
        //while(trs.length>0)
        //trs[trs.length].parentNode.removeChild(trs[trs.length]);
        
        /*Limpando as linhas da tabela para cada busca que for realizada*/ 
        if(quantidadeInformada.length===0 && i.length===0){                   
               while(trs.length>0) 
               trs[1].parentNode.removeChild(trs[1]);
    
        }
        limpaInput();
        
  
 }


}

request.open("GET","https://api.publicapis.org/entries");

request.send();


}


/*Limpando o quantidade apos a execuçaõ do for*/
function limpaInput(){
    document.getElementById('quantidade').value='';
    
}



