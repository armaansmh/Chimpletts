import React, { useState } from "react";

const FAQs = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <div style={{
            backgroundColor: "rgb(0,26,68)",
        }} id="faqs" className="bg-black border-t max-w-screen overflow-hidden w-screen border-white w-screen bg-blend-multiply text-white lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12">

            {/* <h1 className="text-center lg:text-4xl text-2xl lg:leading-9 leading-7 font-semibold"></h1> */}
            <div style={{
                backgroundColor: 'rgb(1,127,209)'
            }} className="lg:w-8/12 w-[70%] p-4 rounded-3xl mx-auto">
                {/* <!-- Question 1 --> */}

                <div className="w-full md:px-6  mt-4" onClick={() => setOpen(!open)}>
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-xl md:text-xl text-sm leading-6 md:leading-5 lg:leading-4 font-semibold">Q1.</span> What is Project Yokai?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                        <p className="text-base text-white leading-6 text-left font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio exercitationem eum nulla, at labore maiores est aut ratione laborum, doloremque sunt veniam dicta deserunt. Distinctio deserunt aliquid nihil excepturi ipsa optio facilis odit beatae.</p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 " onClick={() => setOpen2(!open2)}>
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold   ">Q2.</span> What is the total supply?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                        <p className="text-base text-left leading-6 text-white font-normal">The total supply will be 2222</p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 " onClick={() => setOpen3(!open3)} >
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4   ">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold   ">Q3.</span>
                                What is the mint price?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                        <p className="text-base text-left leading-6 text-white font-normal">1 Sol</p>
                    </div>
                </div>

                {/* <!-- Question 4 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  " onClick={() => setOpen4(!open4)} >
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4   ">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold   ">Q4.</span>
                            What is the mint time?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-left text-white font-normal">From 12AM March Soon.</p>
                    </div>
                </div>


                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  mb-4" onClick={() => setOpen5(!open5)} >
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4   ">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold   ">Q5.</span>
                            Which Wallets can be used to mint?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-left text-white font-normal">Phantom, Solflare & Sollet</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FAQs;

 