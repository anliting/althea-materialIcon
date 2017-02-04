module.getByPath('https://fonts.googleapis.com/icon?family=Material+Icons').then(s=>
    this._style(document.createTextNode(s))
)
