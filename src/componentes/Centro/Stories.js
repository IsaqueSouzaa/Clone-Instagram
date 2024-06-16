import Story from "./Story"
import './Stories.css'
import Gaguinho from './imagem/Gaguinho.jpg'
import Piu_piu from './imagem/Piu_piu.jpg'
import Eufrazino from './imagem/Eufrazino.jpg'
import Marvin from './imagem/Marvin.jpg'
import Frajola from './imagem/Frajola.jpg'
import Pepe from './imagem/Pepe.jpg'



var listaUsuarios = [
    {
        nome: "Gaguinho",
        src: Gaguinho
    },
    {
        nome: "Piu Piu",
        src: Piu_piu
    },
    {
        nome: "Marvin",
        src: Marvin
    },
    {
        nome: "Frajola",
        src:Frajola
    },
    {
        nome: "Eufrazino",
        src: Eufrazino
    },
    {
        nome:"Pepe",
        src: Pepe

    }
   
    
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.src} />
                })
            }

        </div>
    )
}