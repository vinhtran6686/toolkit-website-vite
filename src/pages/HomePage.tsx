import Layout from 'components/Layout';
import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { Link } from "react-router-dom";


const HomePage = () => {
   return (
      <Layout>
         <div className="text-center my-8">
            <h1 className="text-3xl font-bold">Welcome to Computational Toolkits</h1>
            <p className="mt-4 text-lg">Select a tool to get started.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white-500">
                     123
                  </div>
                  <h2 className="card-title">Calculate Number Tool</h2>
                  <p>Choose from our available tools below:</p>
                  <div className="card-actions flex flex-col gap-4 mt-4">
                     {/* Updated Links for better UX */}
                     <Link to="/difference-number-calculation" className="btn btn-primary w-full">Difference Number Calculation Tool</Link>
                  </div>
               </div>
            </div>
            {/* Example additional tools */}
            <div className="card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <div className="text-5xl font-bold text-green-500 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                     <IoIosTimer />
                  </div>
                  <h2 className="card-title">Calculate Date Tool</h2>
                  <p>Choose from our available tools below:</p>
                  <div className="card-actions flex flex-col gap-4 mt-4">
                     <Link to="/date-calculation" className="btn btn-neutral w-full">Date Calculation Tool</Link>
                  </div>
               </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">Example Tool 2</h2>
                  <p>Description for example tool 2.</p>
                  <div className="card-actions flex flex-col gap-4 mt-4">
                     <Link to="/example-tool-2" className="btn btn-default w-full">Example Tool 2</Link>
                  </div>
               </div>
            </div>
            {/* Add more tools as needed */}
         </div>
      </Layout>
   );
};

export default HomePage;
