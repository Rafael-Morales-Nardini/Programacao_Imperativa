class Aluno {
    constructor(nome = "", faltas = 0, notas = []) {
      this.nome = nome;
      this.faltas = faltas;
      this.notas = notas;
    };

    calcularMedia() {
        let media = 0;
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];
        }
        media = soma / this.notas.length;
        return (`${media.toFixed(2)}`);;
    };
    addfaltas() {
        this.faltas++;
      };
      
    };
  
    const aluno1 = new Aluno("Pedro", 8, [6.0, 6.5, 9.5, 8.0]);
  console.log(aluno1.calcularMedia());
  aluno1.addfaltas();
  console.log(aluno1.faltas);

  const curso = {
    nomeCurso: "Curso A",
    notaAprovacao: 6.0,
    faltasMaximas: 2,
    alunos: [],

    addAluno(nome, faltas, notas = []) {
        const novoAluno = new Aluno(nome, faltas, notas);
        this.alunos.push(novoAluno);
      },

      searchAluno(alunoBusca) {
        for (let aluno of this.alunos) {
          if (alunoBusca === aluno.nome) {
            return aluno;
          }
        }
    },

    avaliador(alunoAvaliado) {
    
        const alunoBusca = this.searchAluno(alunoAvaliado);
        const media = alunoBusca.calcularMedia();
        
        if (
          media >= this.notaAprovacao && alunoBusca.faltas < this.faltasMaximas) {
          console.log("O aluno", alunoBusca.nome,"foi aprovado.","Retorno do programa: ");
          return true;
        } else if (
          media >= this.notaAprovacao + (this.notaAprovacao * 0.1) && alunoBusca.faltas == this.faltasMaximas) {
          console.log("O aluno",alunoBusca.nome,"foi aprovado.","Retorno do programa: ");
          return true;
        } else {
          console.log("O aluno ",alunoBusca.nome,"foi reprovado.","Retorno do programa: ");
          return false;
        }
      },

      listaAvaliador() {
        let aprovados = [];
        for(let aluno of this.alunos){
          aprovados.push({ nome: aluno.nome, aprovado: this.avaliador(aluno.nome) })
        }
      }
    };
    
    curso.addAluno("Caue", 4, [10, 9, 7]);
    curso.addAluno("Luan", 3, [5, 6, 9]);
    curso.addAluno("Ederson", 6, [10, 10, 10]);
    curso.addAluno("Eduardo", 2, [8, 9.5, 6]);
    curso.addAluno("Vanessa", 2, [8, 9.5, 10]);
    curso.addAluno("Pedro", 5, [7, 9, 10]);
    
  console.log(curso.avaliador("Eduardo"));