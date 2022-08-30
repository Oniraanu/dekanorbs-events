import { useDispatch } from "react-redux"
import React, { useState } from 'react'
import Input from '../../reusables/Input'
import { BsFillSlashSquareFill } from "react-icons/bs"
import {addItemsToEvents } from "../../../redux/actions/events"

const CreateEventDetails = (props) => {

const { setEventDetails, eventDetails} = props

const dispatch = useDispatch()

const [fieldError, setFieldError]= useState(
    {
        title: {message: "", error: false},
        location: {message: "", error: false},
        description: { message: "", error: false},
    }
)

const handleChange = (e) =>{
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value })
}

const handleClick = () =>{
  dispatch(addItemsToEvents(eventDetails))
}

  return (
    <>
        <Input text="title" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white" />} 
        label="title" fieldError={fieldError} />

        <Input text="description" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white" />} 
        label="description" fieldError={fieldError} />

        <Input text="location" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white" />} 
        label="location" fieldError={fieldError} />
        
        <button onClick={handleClick}>
          Create Event
        </button>
    </>
  )
}

export default CreateEventDetails