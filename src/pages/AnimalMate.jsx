import React from 'react'
import FormComponent from '../components/FormComponent'
import { useState } from 'react';
import { AddUser } from '../utils/function';
import Info from '../components/Info';

const initialValues = {username:"", phoneNumber:"", information:""}

const AnimalMate = () => {
  const [info, setInfo] = useState(initialValues)
  const [isAdd, setIsAdd] = useState("ADD")

  const handleSubmit = (e) => {
    e.preventDefault()
    AddUser(info)
    setInfo(initialValues)
    setIsAdd("ADD")
  }
  return (
    <>
    <FormComponent info={info}  setInfo={setInfo} handleSubmit={handleSubmit} isAdd = {isAdd} />
    <Info/>
    </>
  )
 
}

export default AnimalMate