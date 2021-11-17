import React from 'react'






const Card2 = ({data}) => {
    
    return (
        
            
              <div className="col">

<div className="card2-body p-9">

<div className="fs-2 fw-bolder text-dark">{`${data.meal} `}</div>

<p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{data.mealDescription}</p>

<div className="d-flex flex-wrap mb-4">

    

    <div className="border-dashed rounded min-w-125px py-3 px-4 mb-3">
        
                              </div>

                          </div>

                      </div>

              </div>
          
      
    
    );
};


export default Card2