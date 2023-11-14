import Layout from "../../components/Layout";
import {gettVehicleBySlug, getAllVehicleSlugs} from '../../lib/api';



export async function getStaticPaths() {
    const vehicles = getAllVehicleSlugs();
    const paths = vehicles.map ((vehicle) => {
        const{slug} = vehicle.node

        return{
            params:{
                id:slug
            }
        }
    });



    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps({params}) {
    const vehicleData = gettVehicleBySlug(params.id);
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
}       


export default SingleVehiclePage;