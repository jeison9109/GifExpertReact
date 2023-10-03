import { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import './App.css'

export const App = () => {
  const [categories, setCategories] = useState(['one puch', 'two puch', 'three puch'])

  const ondAddCategory =() => {
    setCategories([...categories, 'For'])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      <button onClick={ondAddCategory}>Agregar</button>
      <ol>
        {
        categories.map((category) => {
          return <li key={category}>{category}</li>
        })
        }
        
        
      </ol>
    </>
  )
}

