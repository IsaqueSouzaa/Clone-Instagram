import './ConteudoLateralDireita.css';
import Conta from'./Conta';
import Sugestoes from './Sugestoes'


export default function ConteudoLateralDireita (){
    return(
        <div className='conteudoLateralDireito'>
            <Conta/>
            <Sugestoes/>
            <footer>
                <p className='detalhes'>Sobre • Ajuda • Imprensa • API Carreiras • Privacidade • Termos • Localizações • Idioma • Meta Verified </p>
                <p> © 2024 INSTAGRAM FEITO POR <a href="https://github.com/ErikPaulino87" target="_blank" rel="noreferrer" >ERIK PAULINO</a> </p>
            </footer>
        </div>
    )
}