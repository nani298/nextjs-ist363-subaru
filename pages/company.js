import Container from "../components/Container";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Paragraph from '../components/Paragraph';

const CompanyPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center"> Our Company </Heading>
            <Paragraph>Looking to buy a Subaru car or SUV? Customize your perfect Subaru vehichle with our tools. Choose models,trims,options,and colors. Build yours today!</Paragraph>
        </Container>
    </Layout>

}
export default CompanyPage 