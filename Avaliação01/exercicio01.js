paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];

for(let i=0; i<11; i++){
    console.log(paises[i]);
}

paises.length;
console.log(paises.length);

paises.unshift("Portugal");

paises.push("Espanha");

const ultimosTres = paises.slice(-3);
console.log(ultimosTres);

const todosPaises = paises.join(" - ");
console.log(todosPaises);