import Layout from "../../components/Layout";
import {getVehicleBySlug, getAllVehicleSlugs} from '../../lib/api';



export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
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
    const vehicleData = await getVehicleBySlug(params.id);
    return{
        props:{
            vehicleData
        }
    }
}



const SingleVehiclePage = ({vehicleData}) => {
    const {title,slug} = vehicleData;
    return <Layout>
        <h1>{title}</h1>
    </Layout>
}       

export default SingleVehiclePage;