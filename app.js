/* Passo 3
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */


/* Passo 4
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.
*/

// Require do objeto aluno + objeto curso com adição de novo participante

let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'CTD-TN2',
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Jesus Cristo', 3,[8,10,8], this.calcularMedia,this.faltas)
            this.listaEstudantes.push(novoAluno)
    }, 

/* 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
 Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma 
 quantidade, tem que estar 10% acima da nota de aprovação.
 */

/* função de aprovação */
    aprovacaoAluno: function(aluno){

        if(alunos.listaDeAlunos[aluno].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[aluno].quatidadeDeFaltas < curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else if (alunos.listaDeAlunos[aluno].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[aluno].quatidadeDeFaltas == curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else { 
            
            console.log('aprovação: ' + false);
            
        }
    },

/* 6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos 
aprovaram ou não.*/

    /* função de aprovação final de todos os alunos */
    aprovacaoFinalAlunos: function(){

        for (let i = 0; i < alunos.listaDeAlunos.length ; i++){

            if(alunos.listaDeAlunos[i].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[i].quatidadeDeFaltas < curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else if (alunos.listaDeAlunos[i].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[i].quatidadeDeFaltas == curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else { 
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' NÃO APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + false);

            }
        }
    }
}

curso.addAluno();

/* Teste de todos os alunos na função aprovação */
/*console.log(alunos.listaDeAlunos[0])
console.log(alunos.listaDeAlunos[0].calcularMedia())
console.log(alunos.listaDeAlunos[0].quatidadeDeFaltas)
curso.aprovacaoAluno(0)
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(alunos.listaDeAlunos[1])
console.log(alunos.listaDeAlunos[1].calcularMedia())
console.log(alunos.listaDeAlunos[1].quatidadeDeFaltas)
curso.aprovacaoAluno(1)
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(alunos.listaDeAlunos[2])
console.log(alunos.listaDeAlunos[2].calcularMedia())
console.log(alunos.listaDeAlunos[2].quatidadeDeFaltas)
curso.aprovacaoAluno(2)
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(alunos.listaDeAlunos[3])
console.log(alunos.listaDeAlunos[3].calcularMedia())
console.log(alunos.listaDeAlunos[3].quatidadeDeFaltas)
curso.aprovacaoAluno(3)
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(alunos.listaDeAlunos[4])
console.log(alunos.listaDeAlunos[4].calcularMedia())
console.log(alunos.listaDeAlunos[4].quatidadeDeFaltas)
curso.aprovacaoAluno(4)
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(alunos.listaDeAlunos[5])
console.log(alunos.listaDeAlunos[5].calcularMedia())
console.log(alunos.listaDeAlunos[5].quatidadeDeFaltas)
curso.aprovacaoAluno(5)*/


curso.aprovacaoFinalAlunos()