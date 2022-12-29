import React from 'react';
import Layout from '../components/Layout1/Layout';

/** 
 * Import component seperti ini untuk mempercepat loading  
*/
const HomeSorotan= React.lazy(()=>import("../components/Sorotan/HomeSorotan"))

function Index() {
 
  return (
    <Layout title="Danone Home">
      <HomeSorotan/>
      {/* APPLICANTION */}
    
    </Layout>
  );
}
export default Index;
