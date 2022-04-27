const url = "https://skillhubblog.herokuapp.com/api/blog"

let blogs ;


const getData = async e =>{
    const {data} = await axios()
    blogs = data
    console.log(blogs);
    display()
}
getData()

const display = e =>{

let str =`<ul class="list-group">`
    for (const blog  of blogs ) {
        str+=`<li class="list-group-item d-flex justify-content-between">
                ${blog.title} 
                <button class="btn btn-sm btn-dark" onclick="getSingleBlog('${blog._id}')">Details</button>
             </li>`
    }
str+=`</ul>`
document.querySelector("#output").innerHTML=str
}

const getSingleBlog = id => alert(id)
