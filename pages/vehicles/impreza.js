import Layout from "../../components/Layout";
import {gettVehicleBySlug} from '../../lib/api';


export async function getStaticProps() {
    const vehicleData = gettVehicleBySlug("impreza");
    return{
        props:{
            vehicleData
        }
    }
}



const SingleVehiclePage = ({vehicleData}) => {
    const {model,price} = vehicleData;
    return <Layout>
        <h1>{model}</h1>
        <h2>{price}</h2>
    </Layout>
            


export default SingleVehiclePage