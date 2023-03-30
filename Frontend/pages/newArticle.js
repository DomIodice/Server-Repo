import React, { useState, useEffect } from "react"
import { Input } from "@mui/material"
import ariaLabel from "@mui/material"
import { Button } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function newAuthor() {
  const [comment, setComment] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);

  const getAuthor = () => {
    
    return fetch("http://localhost:3001/author")
          .then((response) => response.json())
          .then((data) => setAuthor(data));
  }

  useEffect(() => {
    getAuthor();
  },[])

  const getCategory = () => {
    
    return fetch("http://localhost:3001/category")
          .then((response) => response.json())
          .then((data) => setCategory(data));
  }

  useEffect(() => {
    getCategory();
  },[])


  const submitComment = async () => {
    const response = await fetch('http://localhost:3001/article', {
      method: 'POST',
      body: JSON.stringify({ name : comment, author_id: authorId, category_id: categoryId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div>
      <h1 style={{margin: '25px'}}>Add New Article</h1>
      <Input placeholder="Article Name" 
      type='text' 
      value={comment} 
      onChange={(e) => setComment(e.target.value)} 
      inputProps={ariaLabel} />
       <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Author</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => setAuthorId(e.target.value)}
          autoWidth
          label="Author"
        >
        {author.map((author) => (
          <MenuItem value={author.id}>
            <ul>          
              {author.name}    
            </ul>
          </MenuItem>
        ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => setCategoryId(e.target.value)}
          autoWidth
          label="Category"
        >
        {category.map((category) => (
          <MenuItem value={category.id}>
            <ul>          
              {category.name}    
            </ul>
          </MenuItem>
        ))}
        </Select>
      </FormControl>
      <Button  
      type="submit"
      variant="outlined" 
      onClick={submitComment}>
        Upload Article
      </Button>
    </div>
  )
}

export const getStaticProps  = async () => {
  const res = await fetch (`http://localhost:3001/author`)
  const authors = await res.json()

  return {
    props: {
      authors
    }
  }
}