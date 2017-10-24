import{moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let module=await moduleLoader()
    module.styleByPath('https://fonts.googleapis.com/icon?family=Material+Icons').then(main=>
        document.head.appendChild(main)
    )
}
