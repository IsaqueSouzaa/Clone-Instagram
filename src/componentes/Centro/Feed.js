import './Feed.css';

import Post from './Post/Post';
import Pernalonga from './imagem/Pernalonga.jpg';
import Pernalonga2 from './imagem/Pernalonga2.jpg';
import Patolino from './imagem/Patolino.jpg';
import Patolino2 from './imagem/Patolino2.jpg';


export default function Feed() {
    return (
        <div className="Feed">
            <Post
                foto={Pernalonga}
                title="Pernalonga"
                imgSrc={Pernalonga2}
                titular="Pernalonga"
                body="Orelhas pra cima, que o Pernalonga chegou! 🐰🥕"/>
            <Post
                foto={Patolino}
                title="Patolino"
                imgSrc={Patolino2}
                titular="Patolino"
                body="Mais uma aventura com o pato mais estiloso do pedaço! 🦆"/>
        
        </div>
    )
}