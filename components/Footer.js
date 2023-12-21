import Container from "./Container";
import Heading from "./Heading";
import ButtonUI from "./ButtonUI";
//import Button from "./Button";
import Link from 'next/link';
//import Row from './Row';
import styles from './footer.module.scss';
import Paragraph from "./Paragraph";


const Footer = () => {
    return <div className={styles.contain} marginBottom={1} marginTop={1}>
        <footer className={styles.contain__footer}>
            <div className={styles.contain__footer__a}>
                <Heading level={3} textAlign="center" marginBottom={1} marginTop={1}>
                    Connect with Us
                </Heading>
            </div>
           
            <div className={styles.contain__footer__icons}>
                <Link href="https://www.facebook.com/subaruofamerica">
                    <ButtonUI
                        icon = "facebook"    
                    />
                </Link>
                <Link href="https://www.subaru.com/build.html">
                    <ButtonUI
                        icon = "instagram"   
                    />
                </Link>
                <Link href="https://www.tiktok.com/@subaruofamerica?lang=en">
                    <ButtonUI
                        icon = "twitter"     
                    />   
                </Link>
            </div>
            <Heading level={5} textAlign="center" >
                    Subaru of America, Inc.
            </Heading>
            
        </footer>   
    </div>
}
export default Footer;