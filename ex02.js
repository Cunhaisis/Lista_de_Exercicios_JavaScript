//02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
//Equilátero: Os três lados são iguais. 
//Isósceles:  Dois lados iguais. 
//Escaleno: Todos os lados são diferentes.  
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
//classificação quanto ao tamanho de seus lados. 

function classificacaoTriangulo(a, b, c){
    if (a+b+c == 180 && a == b && b == c ) {
        console.log('Equilátero')
    }
    if(a!= b && b!= c && c!= a){
        console.log('Escaleno')
    }else {
        console.log('Isóceles')
    }

}

classificacaoTriangulo(60,60,60)
classificacaoTriangulo(15,45,70)
classificacaoTriangulo(45,45,60)