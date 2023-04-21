import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['wwe']);

    const onAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;
        // console.log('newCategory: ', newCategory)
        setCategories([newCategory, ...categories]);
    }
    
  return (
    <>
        {/* TITULO */}
        <h1>GiftExpertApp</h1>

        {/* INPUT */}
        <AddCategory 
            // setCategories = {setCategories}
            onNewCategory = {event => onAddCategory(event) }
        />
        
        
        {/* LISTADO DE GIFT */}

        {categories.map((category) =>(
                <GiftGrid
                    key={category} 
                    category={category}
                />
                                   
            )                
        )}

            {/* GIFT ITEM */}
    </>
    
  )
}
