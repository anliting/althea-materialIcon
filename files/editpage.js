import{dom,load}from'/lib/core.static.js'
export default async()=>{
    let module=await load.module()
    let s=await module.getByPath('https://fonts.googleapis.com/icon?family=Material+Icons')
    dom.head(dom.style(s))
}
