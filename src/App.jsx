import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import './App.css'
import { GifGrid } from './components/GifGrid';

export const App = () => {
  const [categories, setCategories] = useState(['one puch']);

  const ondAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ondAddCategory} />
        {
          categories.map((category) =>(<GifGrid key={category} category={category}/>)
          )
        }
    </>
  )
}

