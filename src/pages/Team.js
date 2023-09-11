import React from 'react'
import Header from '../components/Header'
import API from '../assets/API'

export default function Team(){
  return (
    <>
    <Header />
    <div className="body">
      <div className="app">
        <h1 className="Team">
        Build Your Tem</h1>
        <API />
      </div>
      </div>  
    </>
  )
}

