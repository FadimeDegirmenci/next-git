'use client'
const Category = () => {
    const categoryList = [
        {
            name: "Story"
        },
        {
            name: "Novel"
        },
          {
            name: "Poem"
        },
         {
            name: "Magazine"
        },
         {
            name: "stationary"
        } 
    ]
   return(
     <div>
        {
        categoryList.map((category, index) =>(
            <div key={index}>{category.name}</div>
        ))
        
        
        
        }
     </div>
    )
 }
 
 export default Category