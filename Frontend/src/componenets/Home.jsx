import React from "react";


const Home = () => {    
   
    return(
          
    <>    

    <div className=" flex justify-around mt-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">

        <div className="mx-8 mt-20 text-4xl text-white">
                <h2 className="mb-4">Employee</h2>
                <h2 className="mb-4">Management</h2>
                <h2 className="mb-4">System</h2>
                <p className=" text-xl">Manage your employees efficiently and effectively with our system.</p>
        </div>

        <div className="flex">
            <img src="https://img.freepik.com/free-vector/business-people-working-giving-tasks_1262-19728.jpg?semt=ais_hybrid" 
            alt="homeimage" className="h-[400px] w-[350px]" />
        </div>

    </div>
        
    {/* <footer className=" text-white py-4 mt-5 p-">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Employee Management System. All Rights Reserved.</p>
        </div>
    </footer> */}

    </>
    )
}

export default Home;