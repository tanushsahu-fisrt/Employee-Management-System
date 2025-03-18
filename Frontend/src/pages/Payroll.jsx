import Header from "../componenets/Header";

const Payroll = () => {
    return(
        <>  
            <Header />
        <div
        className="p-4 mt-5" 
        >
            
        <div className="m-1 p-2 w-full bg-gray-300 rounded-md">
                    <h1 className="text-left text-2xl">Salary & Compensation</h1>
                    <div className="grid grid-cols-3 bg-green-300 m-1 p-2 space-x-2">
                        <div className="bg-yellow-100 text-xl px-1">
                            <div className="bg-yellow-100 text-xl px-1">
                            Salary Distribution
                                <div>
                                Average salary by department
                                </div>
                                <div className="bg-yellow-100 text-xl px-1">
                                Salary range distribution
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-100 text-xl px-1">
                            <div className="bg-yellow-100 text-xl px-1">
                            Performance Metrics
                                <div>
                                Department-wise performance averages
                                </div>
                                <div className="bg-yellow-100 text-xl px-1">
                                Top and bottom performers
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-100 text-xl px-1">
                            <div className="bg-yellow-100 text-xl px-1">
                            Performance Metrics
                                <div>
                                Department-wise performance averages
                                </div>
                                <div className="bg-yellow-100 text-xl px-1">
                                Top and bottom performers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </>
    )
}

export default Payroll;