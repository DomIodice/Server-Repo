import React, { useState } from "react"
import { Input } from "@mui/material"
import ariaLabel from "@mui/material"
import { Button } from "@mui/material"

export default function newAuthor() {
  const [comment, setComment] = useState('')
  
  const submitComment = async () => {
    const response = await fetch('http://localhost:3001/author', {
      method: 'POST',
      body: JSON.stringify({ name : comment }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


  return (
    <div>
      <h1 style={{margin: '25px'}}>Add New Author</h1>
      <Input placeholder="Insert Author" 
      type='text' 
      value={comment} 
      onChange={(e) => setComment(e.target.value)} 
      inputProps={ariaLabel} /> 
      <Button  
      type="submit"
      variant="outlined" 
      onClick={submitComment}>
        Upload Author
      </Button>
    </div>
  )
}