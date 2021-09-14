import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


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
                      <Button variant="dark">
                        update
                      </Button>

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