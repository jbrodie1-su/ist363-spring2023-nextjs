import Button from '../components/Button';
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swatch from '../components/Swatch';

import { getAllVehicles, getAllColors } from '../lib/api';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getAllVehicles();
  const colors = getAllColors();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
      colors
    }
  }
}
const colors = [
  {
      name: "Crystal Black Silica",
      slug: "crystal-black-silica",
      hex: "#000000"
  },
  {
      name: "Cool-Gray Khaki",
      slug: "cool-gray-khaki",
      hex: "#6e7f86"
  },
  {
      name: "Horizon Blue Pearl",
      slug: "horizon-blue-pearl",
      hex: "#557fa9"
  },
  {
      name: "Crystal White Pearl",
      slug: "crystal-white-pearl",
      hex: "#eeeeee"
  },
  {
      name: "Ice Silver Metallic",
      slug: "ice-silver-metallic",
      hex: "#dfdfdf"
  },
  {
      name: "Magnetite Gray Metallic",
      slug: "magnetite-gray-metallic",
      hex: "#5b5e64"
  },
  {
      name: "Pure Red",
      slug: "pure-red",
      hex: "#a51528"
  },
  {
      name: "Plasma Yellow Pearl",
      slug: "plasma-yellow-pearl",
      hex: "#d6c750"
  },
  {
      name: "Desert Khaki",
      slug: "desert-khaki",
      hex: "#cfc8b5"
  },
  {
      name: "Lagoon Blue Pearl",
      slug: "lagoon-blue-pearl",
      hex: "#5293b4"
  }
];

const Homepage = ({data}) => {
  console.log({data});
  return <Layout>
    <h1>Homepage</h1>
    <h2>Color picker</h2>
    <div>
      Large image goes here
    </div>

    <ul>
      {VideoColorSpace.map((color) => {
        return <Swatch>color={color}</Swatch>
      })}
    </ul>
    <h3>Color name</h3>
    
  
   
  </Layout>
}
export default Homepage