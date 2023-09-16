import "./style.css"
import batente from "../../assets/img/Batente Limitador de Fechadura - 3C0837033C.png";
import fechadura15 from "../../assets/img/Fechadura Elétrica de Porta - 5NN839015A.png";
import fechadura16 from "../../assets/img/Fechadura Elétrica de Porta - 5NN839016A.png";
import dobradica03 from "../../assets/img/Dobradiça de Porta - 8X0831403E.png";
import dobradica04 from "../../assets/img/Dobradiça de Porta - 8X0831404E.png";

function Card_Pedido() {
    return(<div className="geral">
        <div className="card_pedido">
          <div className="header_card8">
            <span>Carlos, Pedido 8</span>
          </div>
          <div className="conteudo_card">
            <div className="info_card">
              <p>Batente Limitador de Fechadura - 3C0837033C</p>
              <p>Qde.: 60</p>
            </div>
            <div className="peca">
              <img
                src={batente}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="agrupamento_pedido">
          <div className="card_pedido">
            <div className="header_card10">
              <span>Roberto, Pedido 10</span>
            </div>
            <div className="conteudo_card">
              <div className="info_card">
                <p>Fechadura Elétrica de Porta - 5NN839016A</p>
                <p>Qde.: 12</p>
              </div>
              <div className="peca">
                <img
                  src={fechadura16}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card_pedido">
            <div className="header_card10">
              <span>Roberto, Pedido 10</span>
            </div>
            <div className="conteudo_card">
              <div className="info_card">
                <p>Fechadura Elétrica de Porta - 5NN839015A</p>
                <p>Qde.: 8</p>
              </div>
              <div className="peca">
                <img
                  src={fechadura15}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="agrupamento_pedido">
          <div className="card_pedido">
            <div className="header_card9">
              <span>Beatriz, Pedido 9</span>
            </div>
            <div className="conteudo_card">
              <div className="info_card">
                <p>Dobradiça de Porta - 8X0831403E</p>
                <p>Qde.: 80</p>
              </div>
              <div className="peca">
                <img src={dobradica03} alt="" />
              </div>
            </div>
          </div>
          <div className="card_pedido">
            <div className="header_card9">
              <span>Beatriz, Pedido 9</span>
            </div>
            <div className="conteudo_card">
              <div className="info_card">
                <p>Dobradiça de Porta - 8X0831404E</p>
                <p>Qde.: 44</p>
              </div>
              <div className="peca">
                <img src={dobradica04} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default Card_Pedido;