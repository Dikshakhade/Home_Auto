import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./header.css"

function Header({title,children}) {
  return (
    <div className='mainsc'>
      <Container>
        <Row>
            <div className='page'>
                {
                    title && (
                        <h1>{title}</h1>
                    )
                }
                <p>{children}</p>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Header
