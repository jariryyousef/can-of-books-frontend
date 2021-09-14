import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export class UpdateBook extends Component {


    render() {
        return (
            // for modal  
            <Modal show={this.props.show} onHide={this.props.closeUpdateModel}>
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 {/*for form  */}
              <Form onSubmit={this.props.handelUpdateModal}>
                <Form.Group className="mb-3">
                  <Form.Label> title</Form.Label>
                  <Form.Control type="text" name="title" placeholder="test" defaultValue={this.props.bookObjectDAta.title} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control type="text" name="description" placeholder="test" defaultValue={this.props.bookObjectDAta.description} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" name="status" placeholder="test" defaultValue={this.props.bookObjectDAta.status} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="Email" placeholder="test"  defaultValue={this.props.bookObjectDAta.email}  />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                  Update!
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
    

    
        )
    }
}

export default UpdateBook
