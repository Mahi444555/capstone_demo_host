import React from 'react'

function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "19rem", "maxHeight": "360px" }}>
                    <img className="card-img-top " src="https://images.unsplash.com/photo-1671119904316-3e7b29f954f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="Card image cap" />
                    <div className="card-body ">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">The best food of restaurant</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })}
                            </select>

                            <select className='m-2 h-100  bg-success rounded'>
                                <option value='half'>Half</option>
                                <option value='full'>Full</option>
                            </select>

                            <div className='d-inline h-100  text-primary fs-5'>
                                Total Price

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card