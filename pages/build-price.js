import Container from "../components/Container";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Paragraph from '../components/Paragraph';
import { Button } from "react-scroll";
import Link from "next/link";
import styles from '../components/buildstyles.module.scss';



const BuildPricePage = () => {
    return <Layout>
        <Container textAlign="center">
            <Heading level={1} textAlign="center"> Build & Price</Heading>
            <Paragraph>Looking to buy a Subaru car or SUV? Customize your perfect Subaru vehichle with our tools. Choose models,trims,options,and colors. Build yours today!</Paragraph>
        </Container>

        <div className={styles.task}>
            <div className={styles.task__head}>
                <Heading level={2} textAlign="center" marginTop={3} marginBottom={2}>
                    Get Behind the wheele 
                </Heading>
            </div>
            <div className={styles.task__para}>
                <h2 className={styles.task__para__a} textAlign="center" marginBottom={3}>
                    Start customizing your Crosstrek today or contact your local Subaru dealer to experience one in person. 
                </h2>
            </div>
            <div className={styles.task__btns}>
                <div className={styles.task__btns__a}>
                    <Link href="https://www.subaru.com/build.html">
                        <button className={styles.task__btns__a__text}>
                            Build & Price 
                        </button>
                    </Link>
                </div>
                <div className={styles.task__btns__b}>
                    <Link href="https://www.subaru.com/support/customer-support.html">
                        <button className={styles.task__btns__b__text}>
                            Build & Price 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>

}
export default BuildPricePage;