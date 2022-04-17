import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import apiUrl from '../apiURL'

function CreatePerson() {
    // I am going to need to do a post request and within that i will have use states that are correlated with the user's input
    // these two usestates will handle the change of user input
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDay, setBirthday] = useState('')
    const [relationship, setRelationship] = useState('')
    const [gender, setGender] = useState('')
    const [pronouns, setPronouns] = useState('')

    const navigate = useNavigate()

    // FIRST NAME
    const firstHandleChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value)
    }
    // LAST NAME
    const lastHandleChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value)
    }
    // BIRTHDAY
    const birthdayHandle = (event) => {
        event.preventDefault();
        setBirthday(event.target.value)
    }
    // RELATIONSHIP
    const relationshipHandle = (event) => {
        event.preventDefault();
        setRelationship(event.target.value)
    }
    // GENDER
    const genderHandle = (event) => {
        event.preventDefault();
        setGender(event.target.value)
    }
    // PRONOUNS
    const pronounsHandle = (event) => {
        event.preventDefault();
        setPronouns(event.target.value)
    }
    // SUBMIT
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(apiUrl + '/createperson', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "firstName":firstName.toString(),
        "lastName":lastName.toString(),
        "birthDay":birthDay.toString(),
        "gender":gender.toString(),
        "pronouns":pronouns.toString(),
        "relationship":relationship.toString(),
        "username": sessionStorage.getItem("username")
    })
    
  })
  setFirstName("");
  setLastName("");
  setBirthday("");
  setGender("");
  setPronouns("");
  setRelationship("");
      }


  return (
    <div className='create-person-div'>
        <div className='leftSideBar'></div>
        <main>
            <div className='person-box'>
              <h2 className='box-title'>Who would you like to remember?</h2>
              <form className='person-info-form' onSubmit={handleSubmit}>
                <label>First Name </label>
                <input type='text' placeholder="" onChange={firstHandleChange} value={firstName}/>
                <label>Last Name </label>
                <input type='text' placeholder="" onChange={lastHandleChange} value={lastName}/>
                <label>Birthday </label>
                <input type='text' placeholder="" onChange={birthdayHandle} value={birthDay}/>
                <label>Gender </label>
                <input type='text' placeholder="" onChange={genderHandle} value={gender}/>
                <label>Pronouns </label>
                <input type='text' placeholder="" onChange={pronounsHandle} value={pronouns}/>
                <label>Relationship </label>
                <input type='text' placeholder="" onChange={relationshipHandle} value={relationship}/>
                <input type="submit" value="Submit" />
                <div className='return-div'>
                <button className='return-to-dashboard' onClick={()=>navigate('/dashboard')}> Return to Dashboard</button>
                </div>
                
              </form>
            </div>
            
        </main>
        <div className='rightSideBar'></div>
    </div>
  )
}

export default CreatePerson