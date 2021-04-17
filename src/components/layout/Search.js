import React from 'react'
import {Form, Container, Col, Button} from 'react-bootstrap';

export default function Search(props) {
    
    const [search, setSearch] = React.useState('');
    const handleClick = e => {
        e.preventDefault()
        props.func(search)
    }
    return (
        <Container>
        <h1>{search}</h1>
            <Form>
                <Form.Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
                            placeholder="Search for Pokemon" />
                    </Col>
                    <Col sm={2} className="my-1">
                        <Button block onClick={handleClick}>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}
