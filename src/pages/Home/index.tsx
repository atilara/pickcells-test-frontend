import './style.css';

import Button from '../../components/Button';

import pickcellsImg from '../../assets/images/logo.png';

const Home = () => {
  return (
    <div id="container">
      <img src={pickcellsImg} alt="Logo da Empresa" />
      <h1>Este é um sistema para Gerenciamento de Cursos!</h1>
      <h4>
        Me chamo Átila Rodrigues, e estou realizando este desafio à pedido da
        PickCells, para saber mais, clique no botão a seguir:
      </h4>
      <div id="button-wrapper">
        <a href="https://github.com/pickcells/pickcells_test" target="_blank">
          <Button content="Desafio" />
        </a>
        <a
          href="https://github.com/atilara/pickcells-test-frontend"
          target="_blank"
        >
          <Button content="Repositório" />
        </a>
      </div>
    </div>
  );
};

export default Home;
