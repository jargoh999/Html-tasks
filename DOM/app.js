const booklist = document.querySelector('#book-list ul')
console.log(wrapper)
wrapper.addEventListener("click",(element)=>{console.log(element)
                let classname = element.target.className
                if(Object.is(classname,"delete")){
                    let li=element.target.parentElement
                    booklist.removeChild(li)
                }

                 // console.log(classname)
})
const searchBook=document.forms["search-books"];
const listOfBooks = document.querySelectorAll("#book-list li .name")
// console.log(searchBook)
// console.log
searchBook.addEventListener("keyup",function (event){
        // console.log(event)
        let inputText = event.target.value.toLowerCase()
        // console.log(inputText)
       listOfBooks.forEach((book)=>{
           let title = book.textContent.toLowerCase()
           let isIncluded = title.includes(inputText)
           let parentNode = book.parentNode;
           if(isIncluded){
               parentNode.style.display="block"
           }else{
               parentNode.style.display="none";
           }
       })
})


// console.log(wrapper.lastElementChild)
// console.log(wrapper.previousElementSibling)
// console.log(wrapper.previousSibling)
//
// const title = document.getElementsByClassName("title");
// console.log(title)
//

// console.log(Array.isArray(Array.from(title)))
//

// let head = document.getElementsByTagName("header")
// console.log(head)

// const booklist = document.querySelector("#book-list ul li")

// const booklist1= document.querySelectorAll("#book-list ul li .name")
// // console.log(booklist1[1].textContent);
// // console.log(booklist1[1].innerHTML);
// console.log(booklist1)
// booklist1.forEach((book)=>{
//     book.textContent+="(test)";
    // console.log(book.textContent)
// })
// console.log(booklist1)
