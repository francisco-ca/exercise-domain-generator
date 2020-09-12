  var pronoun = ['the','our','your','his','their'];
  var adj = ['great', 'big','amazing','strong','weak','polite','inmortal','shy','pretencious','intrepid' ];
  var noun = ['jogger','racoon','spiderman','tree','domain','cat','dog','spider','bird','potatoe','carrot'];
  var ext= ['.com','.es','.co','.cl','.br','.uk','.fr','.po','.ge','.us','.pe']


const randomdomain = () => {
let domainname = "";
for (let i=0; i< pronoun.length; i++){
     
    for (let j=0; j< adj.length; j++){
     
    for (let k=0; k< noun.length; k++){
    
    for (let l=0; l< ext.length; l++){
   
    domainname = pronoun[i] + adj[j]+ noun[k] + ext[l]

console.log (domainname);}}}}


;}

randomdomain()
