import{dom,moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let module=await moduleLoader()
    let s=await module.getByPath('https://fonts.googleapis.com/icon?family=Material+Icons')
    dom.head(dom.style(s))
}
