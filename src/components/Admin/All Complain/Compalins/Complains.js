import React, { useEffect, useState } from "react";



import { Carousel, Row } from "react-bootstrap";





const Complains = () => {
    const [collectcomplains, setCollectComplains] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/complain/collectcomplains")
            .then((res) => res.json())
            .then((data) => setCollectComplains(data));
    }, []);



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Complain</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        collectcomplains.map((complain, i) => 
                            <tr>
                                <th>{i + 1}</th>
                                <td>{complain?.description}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Complains;