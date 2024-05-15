import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomeMessageAdmin = () => {
    const [welcomeMessageShow, setWelcomeMessageShow] = useState(true);
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState(""); // Corrected state name to lowercase

    // Function to retrieve user's name and role from localStorage
    useEffect(() => {
        const storedUserData = localStorage.getItem('ACCESS_TOKEN');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUserName(userData.name);
            setRole(userData.role); // Corrected state setter
        }
    }, []);

    return (
        <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
            <div
                className="bg-[#083752] text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4"
                style={{
                    display: welcomeMessageShow ? 'block' : 'none',
                    transition: 'all 500ms ease',
                    transform: welcomeMessageShow ? 'scale(1)' : 'scale(0.9)',
                    opacity: welcomeMessageShow ? '1' : '0'
                }}
            >
                <div className="flex flex-wrap -mx-3 items-center">
                    <div className="w-1/4 px-3 text-center hidden md:block">
                        <div className="p-5 xl:px-8 md:py-5">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1026/1026658.png"
                                alt="Welcome"
                                className="object-cover object-center w-full h-full rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
                        <div className="p-5 xl:px-8 md:py-5">
                            <h3 className="text-2xl">Welcome, <span className='text-2xl text-white font-bold mb-2 text-transform: uppercase'>{userName}</span></h3>
                            <h5 className="text-2xl text-white  mb-2 text-transform: uppercase ">{role}</h5>
                            <p className="text-sm text-white">
                            Welcome, {userName}  Would you like to add a product? Click on the "Add Product" button to update the content.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                        <div className="p-5 xl:px-8 md:py-5">
                            <Link
                                className="block w-full py-2 px-4 rounded text-white bg-teal-600 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
                                to="addproduct"
                            >
                                Add products
                            </Link>
                            <button
                                className="w-full py-2 px-4 rounded text-white bg-[#395E74] hover:bg-white focus:outline-none transition duration-150 ease-in-out"
                                onClick={() => {
                                    setWelcomeMessageShow(false);
                                    setTimeout(() => {
                                        setWelcomeMessageShow(true);
                                    }, 2000);
                                }}
                            >
                                No thanks
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BUY ME A COFEE AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    {/* Here goes your "buy me a coffee" section */}
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessageAdmin;
