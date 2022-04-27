const axios = (method, serverURL) =>{
    return new Promise( (resolve ,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, serverURL)
        xhr.responseType="json"
        xhr.onload  = e => resolve(xhr.response)
        xhr.onerror = e => reject('SERVER ERROR')
        xhr.send()
    } )
}