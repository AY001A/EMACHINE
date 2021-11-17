import React, { useState }  from 'react'
import Card2 from './Card2'

const Form2 = () => {

            const [submitting, setSubmitting] = useState(false);

            const [data, setData] = useState({
                meal: "",
                mealDescription: "",
                
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
                 

                      {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">please wait...</span>
                      </p>
                      }

                  
              
          </div>

    


<div className="col-lg-6"> 
<h3 className="display-5 fw-bold">MEAL INFO</h3>
    <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
        <div className="col-md-6">
            <label htmlFor='meal' className="form-label">Meal</label>
            <input type="text" className="form-control" id="meal" name='meal' onChange={onChangeHandler} value={data.meal}/>
        </div>
        <div className="col-md-6">
            <label htmlFor='mealdescription' className="form-label">Meal Description</label>
            <input type="text" className="form-control" id="mealdescription" name='mealDescription' onChange={onChangeHandler} value={data.mealDescription}/>
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">submit</button>
        </div>
       
    </form>
    </div>
    </div>
    {submittedData !==null && <Card2 data={submittedData}/>}
    
</div>

    )
}


export default Form2


