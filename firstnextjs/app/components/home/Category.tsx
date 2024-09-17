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
     <div className="flex items-center justify-center px:3 md:px-10 gap-3 mid:gap-8 overflow-x-auto">
        {
        categoryList.map((category, index) =>(
            <div className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center curser-pointer flex-1 px-4 py-2 text-center" key={index}>{category.name}</div>
        ))
        
        
        
        }
     </div>
    )
 }
 
 export default Category