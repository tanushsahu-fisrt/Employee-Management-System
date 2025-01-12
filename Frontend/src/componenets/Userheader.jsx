import React, { useEffect, useState } from "react";

const Userheader = () => {

    const[login,setLogin] = useState('Login');
    const [showMenu, setShowMenu] = useState(false); 

    const token = sessionStorage.getItem("admin");

    useEffect(  () => {
        if(token){
                const user = JSON.parse(token); 
                setLogin(user.email);
            }
    },[])

    const handleLoginClick = () => {
        if (token) {
            setShowMenu(!showMenu); // Toggle the menu visibility
        } else {
            window.location.href = "/login"; // Redirect to login page if not logged in
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("admin");
        window.location.href = "/";
    };

    return(
    <div>
       
        <header className="text-white py-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-[2px] ">
            <div className="container">
            <nav>
                <ul className="flex space-x-6 my-1 text-xl mx-5">
                    <li><a href="#" id="homedash" className ="hover:underline border-2 border-white rounded-lg px-1 ">Show profile</a></li>
                    <li><a href="/mycurrentsal"  className ="hover:underline border-2 border-white rounded-lg px-1 ">Current Month salary Slip</a></li>
                    <li><a href="#" id="admindash" className ="hover:underline border-2 border-white rounded-lg px-1">Show salary Statement </a></li>
                </ul>               
                <button onClick={handleLoginClick}
                className="absolute right-8 top-5 hover:underline text-white border-2 border-white rounded-lg px-1 space-x-10"
                >{login}
                </button>
            </nav>
            </div>
        </header>

        {showMenu && (
                <div className="flex flex-col p-2 absolute right-4 top-15 border-2 border-black text-lg bg-white rounded-sm">
                    <a href="/changepw" className="text-blue-500 hover:underline">
                        Change Password
                    </a>
                    <hr className="shadow-2xl" />
                    <button onClick={handleLogout} className="text-black rounded">
                        Log Out
                    </button>
                </div>
        )}



    </div>
    
    )
}

export default Userheader;