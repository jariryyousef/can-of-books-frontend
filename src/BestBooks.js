import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import UpdateBook from "./components/UpdateBook";


// import { Alert } from "react-bootstrap";


//======================Form Import===================

import FormDialog from './components/BookFormModal.js';

//====================================================



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showUpdateModal:false,

      bookObjectDAta :{}
      
      
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */


  //========================= this function calls the render fun. first then excutes.
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/book`)
      .then((bookResponse) => {
        this.setState({ books: bookResponse.data });
      })
      .catch((error) => alert(error.message));
  };


  //======== add book function for modal:=============================
  showForm = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
 

  // book object to pass to the component
  closeUpdateModel = (bookObject) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      // save the data come from map loop inside state
      bookObjectDAta:bookObject
    });
  }


  // test= () =>{
  
  // this.setState({
  //   showUpdateModal:!this.state.showUpdateModal,


  // });
  // }

  



  //================== Form Submit:====================================
  formSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title: e.target.name.value,
      description: e.target.desc.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    axios.post(`${process.env.REACT_APP_API_URL}/book`, requestBody).then((booksResponse) => {
      this.state.books.push(booksResponse.data);  // to prevent data lose.
      this.setState({
        // books: response.data,
        books: this.state.books
      });
      this.showForm();
    }).catch(() => alert("an error has occurred, couldn't load data"));
  };



  //================================Delete Method=======================================
  deleteHandler = (bookId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/book/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const alteredBooksArray = this.state.books.filter(
            (book) => book._id !== bookId
          );
          this.setState({ Book: alteredBooksArray });
        }
      }).catch(() => alert("an error has occurred, couldn't load data"));
  };


  handelUpdateModal = (event) => {
    event.preventDefault();
    const requestBody = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: event.target.Email.value,
      _id: this.state.bookObjectDAta._id,
    };

 axios.put(`${process.env.REACT_APP_API_URL}/book/${this.state.bookObjectDAta._id}`, requestBody).then((updatedBookObject) => {
  const updateBookArray = this.state.books.map(book => {

    if (book._id === this.state.bookObjectDAta._id){

      book=updatedBookObject.data;

      return book;
    }


    return book;
  });

  this.setState({
    booksData: updateBookArray,
    updatedBookObject: {}
  })




    this.closeUpdateModel();
    }).catch(() => alert("something wrong"));

  
  }


  render() {

    return (
      /* TODO: render user's books in a Carousel */

      <div>


        <Button variant="dark" onClick={this.showForm}>
          Add a new book
        </Button>


        {this.state.showModal &&
          <FormDialog
            show={this.state.showModal}
            handleClose={this.showForm}
            formSubmit={this.formSubmit}
          />
        }


{/* {
      this.state.showUpdateModal &&
        
          <UpdateBook
          show={this.state.showUpdateModal}
            />
        } */}


{
          this.state.showUpdateModal &&
          <>
            <UpdateBook
              show={this.state.showUpdateModal}
              handelUpdateModal={this.handelUpdateModal}
              closeUpdateModel={this.closeUpdateModel}
              bookObjectDAta={this.state.bookObjectDAta}
            />
          </>
        }


        {/* <h1>Test</h1> */}
        {this.state.books.length > 0 && (
          <>

            {this.state.books.map((book) => {
              return (
                <>

                  <Card style={{ width: "18rem" }}>

                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text> {book.description} </Card.Text>
                      <Card.Text> {book.status} </Card.Text>
                      <Card.Text> {book.email} </Card.Text>
                      <Button variant="dark" >
                        Delete
                      </Button>
                      {/* <Button variant="dark" 
                      onClick= {  ()=> this.test} >
                        update
                      </Button> */}

                  <Button variant="dark"
                   onClick={() => this.closeUpdateModel(book)}
                   >Update Book</Button>

                    </Card.Body>

                  </Card>
                  {/* :(
                  {alert("No Books Found ")}
                  :( */}
                  )
                </>
              );
            })}
          </>
        )}
      </div>);

  }
}

export default BestBooks;