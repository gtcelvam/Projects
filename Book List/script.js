// book class 

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Handle UI Tasks

class UI{
    static displaybooks(){
       const books = store.getbooks();    
       books.forEach((book)=>UI.addBookList(book));
    }
    static addBookList(book){
        const list = document.querySelector("#all-books");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a id="it" class="delete" href = "">X</a></td>
        `;
        row.classList.add(".tbl");
        list.appendChild(row);
    }
    static clearfields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
    static deletebook(item){
        if(item.classList.contains("delete")){
            item.parentElement.parentElement.remove();
        }
    }
}

class store{
    static getbooks(){
        let books;
        if(localStorage.getItem("books")===null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book){
        const books = store.getbooks();

        books.push(book);

        localStorage.setItem("books",JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = store.getbooks();
        books.forEach((book,index)=>{
            if(book.isbn===isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));

    }
}
document.addEventListener("DOMContentLoaded",UI.displaybooks);
// To add Books 
document.querySelector("#form-list").addEventListener("submit",(e)=>{
    // Prevent actual Submit
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if(title == "" || author =="" || isbn == ""){
        alert("No field should be emplty");
    }else{
    // Instatiate book
    const book = new Book(title,author,isbn);
    // Add Book to UI
    UI.addBookList(book);

    //Add book to store
    store.addBook(book);
    // clear fields 
    UI.clearfields();
    }
    
});

//Event : Remove Book
document.querySelector("#all-books").addEventListener("click",(e)=>{
    UI.deletebook(e.target);
    console.log("woking");
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
});


