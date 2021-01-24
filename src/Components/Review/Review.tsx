import React from 'react'
import './Review.css'
import Button from '@material-ui/core/Button'

const Review = ({submit,values,setFormValues} : any) => {

    const finish=() => {
        submit(0)
        setFormValues({})
    }
    return (
        <div className="review">
            <h3 className="review-item" >First Name: {values.firstName}</h3>
            <hr />
            <h3 className="review-item" >Last Name: {values.lastName}</h3>
            <hr />
            <h3 className="review-item" >Username: {values.userName}</h3>
            <hr />
            <h3 className="review-item" >Email Address: {values.email}</h3>
            <hr />
            <h3 className="review-item" >Current Address: {values.address}</h3>
            <hr />
            <h3 className="review-item" >City: {values.city}</h3>
            <hr />
            <h3 className="review-item" >Province: {values.province}</h3>
            <hr />
            <h3 className="review-item" >Country: {values.country}</h3>
            <hr />
            <h3 className="review-item" >Phone: {values.phone}</h3>
            <hr />
            <h3 className="review-item" >Interest: {values.interest}</h3>
            <hr />
            <h3 className="review-item" >Last Company Worked: {values.lastCompany}</h3>
            <hr />
            <h3 className="review-item" >Job Title: {values.jobTitle}</h3>
            <hr />
            <h3 className="review-item" >Salary: ${values.salary}</h3>
            <hr />
            <h3 className="review-item" >Degree Type: {values.degreeType}</h3>
            <hr />
            <h3 className="review-item" >Field: {values.field}</h3>
            <hr />
            <h3 className="review-item" >Years Of Passing: {values.yearOfPassing}</h3>
            <hr />
            <h3 className="review-item" >University Name: {values.universityName}</h3>
            <hr />
            <h3 className="review-item" >University Address: {values.universityLocation}</h3>
            <hr />
            <div className="review-btn-grp">
                        <Button  variant="contained" color="secondary" onClick={() => submit(2)} >Back</Button>
                        <Button onClick={finish} variant="contained" color="primary" type='submit' >Finish</Button>
                    </div>
        </div>
    )
}

export default Review
