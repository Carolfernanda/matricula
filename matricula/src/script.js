//objeto

//const estudante = {
 // nome: "Carolina",
  //idade: 38,
  //matricula: "123456",


//console.log(estudante.nome);
// notação por
//console.log(estudante["matricula"]);
// notação por []
//console.log(`Meu nome é ${estudante.nome} e tenho ${estudante.idade} anos.`);
//usando template string
//console.log(estudante.matricula.substring(0,3));
//método substring

//for (const key in estudante) {
  //console.log(estudante[key]);
  

//loop for..in



//Adicona -altera JS

const estudante = {
  nome: "Carolina",
  idade: 38,
  matricula: "123456",
}


//Adicionar
estudante.matricula = "123456";
estudante.fones = ["35487799", "98774586"];

console.log(estudante);

//Alterar 
estudante.curso = "front-end"
estudante.fones = ["0000000", "98774586"]

//Deletar
delete estudante.matricula; //notação de ponto
console.log(estudante);

delete estudante ["idade"]; //notação de array
console.log(estudante);
