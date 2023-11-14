import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllVehicles } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();

    return {
        props:{
            vehicles
        }
    }
}

const VehichlesPage = ({vehicles}) => {
    return <Layout>
        <h1> Vehicle</h1>
        <ul>
            {vehicles.map((vehicle,index) =>{
                const {title,slug} = vehicle.node;
                return <li key ={index}>
                    <h3>{title}</h3>

                    <p>
                        <Link href={`/vehicles/${slug}`}>Learn more</Link>
                    </p>
                </li>
            })}
        </ul>
    </Layout>

}

export default VehichlesPage;