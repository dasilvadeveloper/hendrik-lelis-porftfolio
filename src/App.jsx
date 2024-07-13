import "./App.css";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <header id="home">
        <div class="description">
          <h1 class="highlight-text">
            have your next page <br />
            developed by Da Silva
          </h1>
          <p>
            Let me design your website and be <br />
            responsible for its design, development and <br />
            maintenance.
          </p>
          <button
            onclick="window.location.hash = 'footer';"
            id="click-me"
            class="checkout-btn animate__animated animate__bounce"
          >
            check out
          </button>
        </div>
        <img src="assets/img/dasilva.png" alt="" />
      </header>
      <div class="dasilva-projects-info">
        <span class="v-separator"></span>
        <div class="project-info">
          <span>+2</span>
          <div class="description">
            <img src="assets/img/happy-client-icon.svg" alt="" />
            <p>
              HAPPY <br />
              CLIENTS
            </p>
          </div>
        </div>
        <span class="v-separator"></span>
        <div class="project-info">
          <span>+5</span>
          <div class="description">
            <img src="assets/img/project-icon.png" alt="" />
            <p>
              PROJECTS <br />
              DONE
            </p>
          </div>
        </div>
        <span class="v-separator"></span>
        <div class="project-info">
          <span>+10</span>
          <div class="description">
            <img src="assets/img/design-icon.png" alt="" />
            <p>
              DESGINS <br />
              DONE
            </p>
          </div>
        </div>
        <span class="v-separator"></span>
      </div>
      <section id="projects">
        <h1>Projects</h1>
        <div class="content">
          <div class="project">
            <img src="assets/img/wimb.png" alt="" />
            <span class="h-separator"></span>
            <div class="description">
              <h4>WHERE IS MY BUS</h4>
              <p>
                With "Where is my bus" you will know exactly where your bus is,
                second by second, through the geolocation exposed in real time,
                on the map. And even if you are distracted, you can configure
                notifications to be alerted according to a distance, in relation
                to the desired bus stop.
              </p>
            </div>
            <div class="sub-description">
              <div class="platforms">
                <img src="assets/img/playstore.png" alt="" />
                <img src="assets/img/web.png" alt="" />
                <img src="assets/img/desktop.png" alt="" />
              </div>
              <button class="checkout-btn">
                <a href="https://t04-hendrick.vigion.pt/PAP/">
                  check out <img src="assets/img/link.png" alt="" />
                </a>
              </button>
            </div>
          </div>

          <div class="project">
            <img src="assets/img/SLL.png" alt="" />
            <span class="h-separator"></span>
            <div class="description">
              <h4>SUNNY LAND LIFE</h4>
              <p>
                A 2D platform game developed in Unity Engine for desktop only.
                Asset credits: @Ansimuz
              </p>
            </div>
            <div class="sub-description">
              <div class="platforms">
                <img src="assets/img/desktop.png" alt="" />
              </div>
              <button class="checkout-btn">
                <a href="./assets/downloads/jogo.rar" download>
                  check out <img src="assets/img/link.png" alt="" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects2">
        <h1>Projects for clients</h1>
        <div class="content">
          <div class="project">
            <img src="assets/img/IBR.png" alt="" />
            <span class="h-separator"></span>
            <div class="description">
              <h4>INNER BEAUTY RITUALS</h4>
              <p>
                Inner beauty rituals is designed for anyone that wants long and
                healthy hair, but finds it unattainable. It's designed for those
                that want to feel beautiful, inside and outside. Our brand motto
                is simple, If your hair looks good, you feel good. We want to
                help our customers achieve their dream hair goals, improving
                this way their self-esteem.
              </p>
            </div>
            <div class="sub-description">
              <div class="platforms">
                <img src="assets/img/web.png" alt="" />
              </div>
              <button class="checkout-btn">
                <a href="https://innerbeautyrituals.pt/">
                  check out <img src="assets/img/link.png" alt="" />
                </a>
              </button>
            </div>
          </div>

          <div class="project">
            <img src="assets/img/cbyc.png" alt="" />
            <span class="h-separator"></span>
            <div class="description">
              <h4>Coral Boats Yachts Charter</h4>
              <p>
                Cascais boat tours and fishing. Enjoy unique experiences around
                the Cascais Sea.
              </p>
            </div>
            <span>in development</span>
            <div class="sub-description">
              <div class="platforms">
                <img src="assets/img/desktop.png" alt="" />
              </div>

              <button disabled class="checkout-btn">
                check out <img src="assets/img/link.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="designs">
        <h1>Designs</h1>
        <div class="content">
          <img src="assets/img/coralboatsdesign.png" alt="" />
          <img src="assets/img/IBRdesign.png" alt="" />
          <img src="assets/img/IBR2design.png" alt="" />
          <img src="assets/img/Dasilvadev2nddesign.png" alt="" />
          <img src="assets/img/habibdesign.png" alt="" />
          <img src="assets/img/isk8design.png" alt="" />
          <img src="assets/img/papbanner1.png" alt="" />
          <img src="assets/img/papbanner2.png" alt="" />
          <img src="assets/img/papbanner3.png" alt="" />
        </div>
      </section>

      <section id="about">
        <h1>Who am I?</h1>
        <div class="content">
          <div class="first-part">
            <p>
              Entrei no mundo da programação em 2018. Nunca tive contacto com
              desenvolvimento nam minha vida, na verdade eu nem queria seguir
              programação.
            </p>
            <p>
              Eu não sabia como ia ser a minha vida depois do 9º ano, sempre me
              disseram para seguir algo relacionado com o que mais gostava de
              fazer, eu gosto de cozinhar, logo fiquei com a ideia de fazer um
              curso de culinária, o que não aconteceu porque não levei a ideia
              muito a sério. Mais tarde passou-me pela cabeça a ideia de seguir
              um curso de artes pelo gosto que tenho por desenhar, o que também
              não levei muito a sério. Finalmente, senti que um curso
              relacionado com montagem e desmontagem de computadores era a minha
              area, pensei isso porque sempre fui um rapaz que gostava de
              computadores, foi a ideia que levei a sério até ao dia em que fui
              fazer a matricula.
            </p>
            <div class="fadeout"></div>
          </div>
          <span id="continue">continue reading...</span>
          <div class="continuation">
            <p>
              Eu resido no Cacém de címa (Lisboa, Portugal), logo a escola
              segundária mais proxima era a secundária Gama Barros, então fui
              fazer a matrícula nessa escola. A minha sorte foi: A secretaria
              estava fechada e eu na noite anterior anterior não tinha dormido,
              estava de acordado de direta.
            </p>
            <p>
              Eu estava muito cansado nesse dia, eu só queria voltar pra casa
              para dormir e a secretaria dessa escola só abria 1 hora depois,
              foi então que decidi ir fazer matrícula na escola secundária
              Ferreira Dias que ficava mais longe da minha casa.
            </p>
            <p>
              Na altura de marcar o curso desejado, o meu padrasto comentou se
              eu queria mesmo aquilo e se não preferia seguir um curso de
              programação, pensei pensei pensei, e para despachar logo esse
              assunto para poder ir para casa dormir eu marquei o curso de
              programação e pronto.
            </p>
            <p>
              Começou o ano letivo, nova escola, nova vida. Estava a iniciar o
              meu secundário e era tudo novo para mim.
            </p>
            <p>
              Nas primeiras aulas técnicas do curso eu não fazia ideia do que
              era a programação, o que ia fazer nem as saídas que poderia ter,
              ia as aula só por ir. Até que os dias foram passando e fui
              percebendo e ganhando cada vez mais interesse pelo curso e eu
              ficava super entusiasmado quando ia ter uma aula de programação.
            </p>
            <p>
              Começamos por dar algoritmia, onde aprendiamos a pensar como um
              programador. Aprendi uma coisa que passei a usar pra tudo na vida,
              a forma de como se resolver um problema. A solução para resolver
              um problema é dividí-lo em vários problemas e priorizar a
              importancia deles e resolver um a um até ter tudo resolvido.
            </p>
            <p>
              Depois da algoritmia tivemos o primeiro impacto com uma linguagem
              de programação a sério, C#. Seguido da linguagem mencionada,
              começamos a trabalhar também com Java, ambas linguagens faziamos
              programinhas e exercicios apenas para consola.
            </p>
            <p>
              Sempre fui um rapaz que aprende rápido, quando gosto de alguma
              coisa eu estudo sobre o assunto diáriamente para estar sempre a
              evoluir, no primeiro ano do curso comecei a destacar-me como um
              dos melhores da sala por entregar tudo sempre no tempo pedido e
              por ser um dos mais consultados para ajudar os meus colegas de
              turma. No 1º ano do curso cheguei a desenvolver um jogo (snake) em
              consola com a linguagem C#, e convidado para participar de uma
              exposição de projetos junto dos alunos do 2º ano do curso, mas não
              fui porque estava um pouco envergonhado e não tinha terminado
              ainda o jogo.
            </p>
            <p>
              A partir do segundo ano a minha vida começou a mudar
              completamente, para bem e para mal. Foi quando conheci uma pessoa
              maravilhosa, pessoa que nunca vou esquecer e vou manter sempre o
              contacto, pessoa que me ensinou as bases da programação e que me
              ensinou a pensar como homem e deixar o pensamento de adolescente
              para trás, pessoa que me ensiou a ser rigoroso, humilde, sincero,
              autodidato e principalmente ambicioso. Esta pessoa é o Professor
              Alexandre Ferraz. Professor programador e Diretor do curso de
              Gestão e Programação de Sistemas Informaticos da escola secundário
              Ferreira Dias, no Cacém.
            </p>
            <p>
              No segundo ano do curso, destaquei-me por completo e fui pras
              linhas de frente do curso, era o que estava sempre a inovar, a
              fazer mais do que era pedido, a aprofundar todos os tópicos da
              programação e a ajudar todos os colegas do curso. Neste curso fui
              convidado para debates interescolares pela direção da escola,
              ajudei o prof. Ferraz a preparar aulas, preparei minhas próprias
              aulas para os meus colegas de curso, trouxe para o curso novidades
              e coisas que iam eneficiar a todos e ajudei diretamente alunos do
              1º do 2º e da minha turma.
            </p>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div id="contacts">
          <h1>
            Hendrik Vinicius <br />
            da Silva Lelis
          </h1>
          <div class="contacts">
            <div class="col">
              <h5>Social</h5>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/hendriklelis/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dasilvadeveloper/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/liife_not_found">Twitter</a>
                </li>
                <li>
                  <a href="https://github.com/dasilvadeveloper">Github</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <h5>Contacts</h5>
              <ul>
                <li>
                  <a href="tel:+351932723551">+351 932 723 551</a>
                </li>
                <li>
                  <a href="mailto:dasilvadeveloper@icloud.com">
                    dasilvadeveloper@icloud.com
                  </a>
                </li>
                <li>
                  <a>@dasilvadeveloper</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form action="">
          <h1>Contact</h1>
          <input type="text" placeholder="Name " />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" cols="30" rows="10"></textarea>
          <button type="submit">Submit</button>
        </form>
      </footer>
      <div class="copyright">
        <p>copyright © 2022 da Silva Developer</p>
        <p>all rights reserved</p>
        <p>
          designed & developed by
          <a href="https://www.instagram.com/liife_not_found/">
            <strong>@dasilvadeveloper</strong>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
