import{moduleLoader}from'/lib/core.static.js'
export default async blog=>{
    let module=await moduleLoader()
    let s=await module.getByPath('https://fonts.googleapis.com/icon?family=Material+Icons')
    blog._style(document.createTextNode(s))
}
