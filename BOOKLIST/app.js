//Book Constructor
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


//UI constructor
function UI(){}

//add book to list
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');
    //create tr element
    const row=document.createElement('tr');
    //insert cols
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert=function(message,className){
        //create div
        const div=document.createElement('div');
        //add classes
        div.className='alert ${className}';
        //add text
        div.appendChild(document.createTextNode(message));

        //get parent
        const container=document.querySelector('.container');
        //get form
        const form=document.querySelector('#book-form');
        //insert alert
        container.insertBefore(div,form);

        // timeout after three seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }

//DELETE BOOK
    UI.prototype.deleteBook=function(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }

    //Clear Fields
    UI.prototype.clearFields=function(target){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }


//event listeners
document.getElementById('book-form').addEventListener('submit',
    function(e){

// getting form values
        const title=document.getElementById('title').value,
        author=document.getElementById('author').value,
        isbn=document.getElementById('isbn').value

        //Instatiate book
        const book =new Book(title,author,isbn);

        //instantiate UI
        const ui =new UI();

        //validate
        if (title==='' || author==='' || isbn==''){
            //errow alert
            ui.showAlert('Please fill in all fields','error')
        }else{
          //add book to list
        ui.addBookToList(book);
        }
       
        //show success
        ui.showAlert('book added','success');
        

        //clear fields
        ui.clearFields();


        // console.log(book);

        e.preventDefault()
    }
);

//event lisener for delete
document.getElementById('book-list').addEventListener('click',function(e){
    console.log(123)

const ui =new UI();

//delete book
ui.deleteBook(e.target);

//show message
ui.showAlert('book removed','success');

    e.preventDefault();
});