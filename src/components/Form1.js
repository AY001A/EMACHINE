import React, { useState }  from 'react'
import Card1 from './Card1'

const Form1 = () => {

            const [submitting, setSubmitting] = useState(false);

            const [data, setData] = useState({
                firstName: "",
                lastName:"",
                email:"",
                address:"",
                phone:"",
            })

            const [submittedData, setSubmittedData] = useState(null);

            const onChangeHandler =(event)=> {
                const {value, name}= event.target
                setData({
                    ...data,
                    [name]: value
                })
            }


    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmittedData(data)
            setSubmitting(false);
        }, 3000)
    }

    return (
        
      <div className="container">
          <div className="row">
              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold">FOOD IS READY</h1>
                  
                      {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">just a minute...</span>
                      </p>
                      }

                  
              </div>
          

    


<div className="col-lg-6" > 
<h3 className="display-5 fw-bold">CUSTOMER INFO</h3>
                  
    <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
        <div className="col-md-6">
            <label htmlFor='firstname' className="form-label">Firstname</label>
            <input type="text" className="form-control" id="firstname" name='firstName' onChange={onChangeHandler} value={data.firstName}/>
        </div>
        <div className="col-md-6">
            <label htmlFor='lastname' className="form-label">Lastname</label>
            <input type="text" className="form-control" id="lastname" name='lastName' onChange={onChangeHandler} value={data.lastName}/>
        </div>
        <div className="col-md-6">
            <label htmlFor='email' className="form-label">email</label>
            <input type="email" className="form-control" id="email" name='email' onChange={onChangeHandler} value={data.email}/>
        </div>
        <div className="col-md-6">
            <label htmlFor='address' className="form-label">address</label>
            <input type="text" className="form-control" id="address" name='address' onChange={onChangeHandler} value={data.address}/>
        <div className="col-md-6"></div>
            <label htmlFor='phone' className="form-label">phone</label>
            <input type="tel" className="form-control" id="inputphone" name='phone' onChange={onChangeHandler} value={data.phone}/>
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">submit</button>
        </div>
    </form>
    </div>
    </div>
    {submittedData !==null && <Card1 data={submittedData}/>}
    
</div>


    );
}


export default Form1


