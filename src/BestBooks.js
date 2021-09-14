import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
// import { Alert } from "react-bootstrap";
import  Button  from "react-bootstrap/Button";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/book`)
      .then((bookResponse) => {
        this.setState({ books: bookResponse.data });
      })
      .catch((error) => alert(error.message));
  };

  render() {

    return(

    /* TODO: render user's books in a Carousel */
    <div>
     
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

                  <Button>update</Button>
                  
                    {/* <Card.Title>t</Card.Title>
                    <Card.Text> e </Card.Text>
                    <Card.Text> s </Card.Text>
                    <Card.Text> t </Card.Text>  */}

                    </Card.Body>
                </Card>
                
              
               
                {/* {alert("No Books Found ")} */}
                  
              </>
            );
          })}
        </>
      )}
     </div>
    )}
}

export default BestBooks;
