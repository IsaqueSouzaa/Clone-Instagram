import logo from '../../imagens/logo.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { MdOutlineExplore } from "react-icons/md";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo'/>  
            
            <ul>
                <Menu nome="Início" icone1={<IoIosArrowDown/>} classe = "text-menu" icone={<IoMdHome/>} />
                <Menu nome="Pesquisa" classe = "text-menu" icone = {<IoSearch/>} />
                <Menu nome="Explorar" classe = "text-menu" icone = {<MdOutlineExplore />} />
                <Menu nome = "Mensagens" classe = "text-menu" icone = {<TbBrandMessenger/>}/>
                <Menu nome = "Notificações" classe = "text-menu" icone = {<GoHeart/>}/>
                <Menu nome = "Criar" classe = "text-menu" icone = {<CgAddR/>}/>
                <Menu className="Perfil" nome = "Profile" classe = "text-menu" icone = {<FaUserAlt/>}/>

            </ul>
        </div>
    )
}

