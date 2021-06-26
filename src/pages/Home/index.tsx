import './style.css';

import Button from '../../components/Button';
import Card from '../../components/Card';

import pickcellsImg from '../../assets/images/logo.png';
import illustration from '../../assets/images/work_in_progress.png';

const Home = () => {
  return (
    <div id="container">
      <img src={pickcellsImg} alt="Logo da Empresa" />
      <header>
        <div>
          <h1>Este é um sistema para Gerenciamento de Cursos!</h1>
          <p>
            Me chamo Átila Rodrigues, e estou realizando este desafio à pedido
            da PickCells. Para saber mais, você pode verificar o enunciado do
            desafio e o repositório onde o mesmo foi desenvolvido através dos
            botões a seguir:
          </p>
          <div id="button-wrapper">
            <a
              href="https://github.com/pickcells/pickcells_test"
              target="_blank"
            >
              <Button>Desafio</Button>
            </a>
            <a
              href="https://github.com/atilara/pickcells-test-frontend"
              target="_blank"
            >
              <Button>Repositório</Button>
            </a>
          </div>
        </div>
        <img src={illustration} alt="Ilustração de um trabalho em andamento" />
      </header>
      <h2>Navegação</h2>
      <div id="pages">
        <Card
          title="Cursos"
          description="Apresenta toda a listagem de cursos disponíveis na instituição de ensino"
          link="/courses"
        />
        <Card
          title="Classes"
          description="Apresenta toda a listagem de classes disponíveis e que podem estar
            associadas a um curso"
          link="/classes"
        />
      </div>
    </div>
  );
};

export default Home;
