import { useState } from 'react';

import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

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
                {filteredVehicles.map((vehicle,index) =>{
                    const {title,slug,vehicleInformation} = vehicle.node;
                    const {trimLevels} = vehicleInformation;
                    return <article key ={index}>
                            {trimLevels && trimLevels[0].images.thumbnail &&
                                <Image 
                                    src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                    alt={trimLevels[0].images.thumbnail.node.altText}
                                    width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                    height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                                />
                            }
                            <h3>{title}</h3>

                            <p>
                                <Link href={`/vehicles/${slug}`}>Learn more</Link>
                            </p>
                    </article>
                })}
            </Grid>
        </Container>
    </Layout>

}

export default VehichlesPage;