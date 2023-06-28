import styles from './Footer.module.css'; 
import { SERVER_NAME } from '@/config'; 

export default function Footer() {
    return <div className={ styles.footer }>
        <div className={ styles.container }>
            <div>© Todos los derechos reservados, <strong style={{ margin: '0px 0px' }}>Facundo Diaz</strong> 2023</div>
        
            <div className={ styles.socials }>
                <a href="https://instagram.com/diazfacuu">
                <img draggable={ false } src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                </a>
                <a href="https://youtube.com/FacundoDiaz">
                <img draggable={ false } src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                </a>
                <a href="https://twitch.tv/facujascs">
                <img draggable={ false } src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </a>
            </div>
        </div>
    </div>
}