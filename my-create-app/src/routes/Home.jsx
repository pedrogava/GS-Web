import "../css/Home.scss"
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Home() {
    document.title = "Home";
    
    if (sessionStorage.getItem("token-usuario")){
    return (
      <>
        <div className="geral">
            <div className="header-1">
              <Cabecalho/>
            </div>

            <div className="container">
              <div className="container-filho">
                <header>
                  <img src="/public/DiabKids.jpeg" alt="" />
                </header>
                <h1 className="marca"> DiabKids </h1>
                <h2>A solução proposta, denominada DiabKids, visa desenvolver uma plataforma abrangente que aborde a conscientização e a maturação de crianças diabéticas em relação à sua condição. </h2>
                <button>Mais informações</button>
              </div>
              <nav>
                <h1 className="perguntas">O que é a solução? </h1>
                  <p> Um site interativo destinado às crianças, oferecendo informações sobre diabetes de forma lúdica e educativa, que contem um sistema de pontuação para incentivar a participação e o aprendizado contínuo. Tambem conta com a Utilização de dispositivos IoT (Internet das Coisas) para monitorar constantemente os níveis de glicose das crianças.  </p>
                <h1 className="perguntas">O que ela fará?</h1>
                  <p> Implementação de um sistema de pontos, onde as crianças acumulam pontos por meio da participação ativa no site, resolução de desafios relacionados à diabetes e realização de tarefas educativas. Os pontos podem ser trocados por recompensas, incentivando um comportamento saudável e a adesão ao tratamento.</p>
                <h1 className="perguntas">Como funcionará? </h1>
                  <p> O dispositivo IoT irá compartilhar os dados em tempo real com os pais e o médico responsável, permitindo um acompanhamento mais preciso e imediato do estado de saúde. </p>
              </nav>
            </div>

            <div className="vantagens">
              <h1> Vantagens </h1>
            </div>
            <div className="cards">
                    <div className="card">
                        <h2> 01 </h2>
                        <p> Ensina as crianças a lidarem com a sua doença de forma leve e agradavel pro resto da vida. </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 02 </h2>
                        <p> O sistema de pontos alem de deixar as crianças mais animadas com o site tambem podem receber premios por altas pontuações. </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 03</h2>
                        <p> Nossa solução tambem pensa na preocupação dos pais, por issso temos nosso dispositivo IoT que enviara o dados de niveis de glicose tanto para os pais quanto pro medico responsavel. </p>
                        <button> Saiba mais </button>
                    </div>
                </div>


                <footer>
                  <Rodape/>
                </footer>
              </div>
      </>
    )}
  } 