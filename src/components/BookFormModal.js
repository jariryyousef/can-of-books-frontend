import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class ModalForm extends React.Component {

    
    render() {
        return (

            <div>
                <Modal.Dialog show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* ======================================= Form  */}

                        <Form onSubmit={this.props.formSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Title:</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter book title.." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Description:</Form.Label>
                                <Form.Control type="text" name="desc" placeholder="Enter book description.." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Status:</Form.Label>
                                <Form.Control type="text" name="status" placeholder="Enter book status.." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="text" name="email"  placeholder="Email.." />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </Modal.Body>

                    
                </Modal.Dialog>
            </div>
        )
    }
}


export default ModalForm;