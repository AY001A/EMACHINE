import React from 'react'
import fried from  '../img/fried.jpg'
import ofada from  '../img/ofada.jpg'
import poundo from  '../img/poundo.jpg'


const Form = () => {
    return (
        <div>
            <h2 align="center">MEALS MENU</h2> 
            <div className='container' align="center">
                <div className='row'>
                <div className='col-lg-4 form-group'>
                    <label for="image" className="form-label">FRIED RICE</label>
                <img src={fried} height={200} width={250} alt="" className="form-control" id='image'/>
                </div>

         <div className='col-lg-4 form-group'>
                    <label for="image" className="form-label">OFADA RICE</label>
                <img src={ofada} height={200} width={250} alt="" className="form-control" id='image'/>
            </div>

            <div className='col-lg-4 form-group'>
                    <label for="image" className="form-label">POUNDED YAM</label>
            <img src={poundo} height={200} width={250} alt="" className="form-control" id='image'/>
            </div>
            
            
            
            </div>

        </div>
        </div>

    )
}

export default Form
