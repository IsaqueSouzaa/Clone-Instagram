import Sugestao from './sugestao';
import './Sugestoes.css';
import Papa_leguas from '../Centro/imagem/Papa_leguas.jpg';
import Taz from '../Centro/imagem/Taz.jpg';
import Foghorn from '../Centro/imagem/Foghorn.jpg';
import Lola from '../Centro/imagem/Lola_Bunny.jpg';
import Hortelino from '../Centro/imagem/Hortelino.jpg';


var listaPerfil = [
    {
        nome: "Road Runner",
        src: Papa_leguas
    },
    {
        nome: "Tasmanian ",
        src: Taz
    },
    {
        nome: "Froghorn",
        src: Foghorn
    },
  
    {
        nome: "Hortelino",
        src: Hortelino
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            {
                listaPerfil.map((usuario) => {
                    return <Sugestao nome={usuario.nome} imagem={usuario.src}/>
                })
            }

        </div>
    )
}