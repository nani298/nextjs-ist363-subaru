import { useState } from 'react';

import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';


import { getAllVehicleTypes, getAllVehicles } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    const vehicleTypes =await getAllVehicleTypes();
    vehicleTypes.unshift({
        "node": {
          "name": "All",
          "slug": "all"
        }
      },);

    return {
        props:{
            vehicles,
            vehicleTypes
        }
    }
}

const VehichlesPage = ({vehicles, vehicleTypes}) => {

    const [activeVehicleType,setActiveVehicleType] = useState('all');

    const filteredVehicles= activeVehicleType === 'all' ? vehicles : vehicles.filter((vehicle) => {
        const {vehicleTypes} = vehicle.node;
        const vehicleTypesSlugs = vehicleTypes.edges.map((vehicleType) => {
            return vehicleType.node.slug;
        });
        return vehicleTypesSlugs.includes(activeVehicleType);
    });

    return <Layout>
        <h1> vehicles</h1>
        <Container>
            <FilterBar  items= {vehicleTypes} activeItem = {activeVehicleType} setActiveItem={setActiveVehicleType}/>
            <Grid>
               
            </Grid>
        </Container>
    </Layout>

}

export default VehichlesPage;