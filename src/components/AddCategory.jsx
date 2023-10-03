import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange =({ target }) => {
        console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim()
        setInputValue('');
        onNewCategory(newValue);
        
    }

    return (
    <>
    <form onSubmit={ onSubmit }>
    <input type="text"
    placeholder="Buscar gif"
    value ={ inputValue }
    onChange={ onInputChange }/>
    </form>
    
    </>
  )
}
