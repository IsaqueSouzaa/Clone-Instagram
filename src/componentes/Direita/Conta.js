import './Conta.css';
import ContaPerfil from './ContaPerfil';
import Coiote from '../Centro/imagem/Coiote.jpg';

export default function Conta(){
    return(
        <div className='Conta'>
            <ContaPerfil
            foto={Coiote}
            titulo="Wile E. Coyote"
            />
        </div>
    )
}