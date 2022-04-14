import React, { useEffect,useState } from 'react'
import  Axios  from 'axios'
 
import { Button,Card , Container,Row} from 'react-bootstrap';

export default function App() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d6e59e6b8e0f4cb2b84570efa5cc5ecb")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data.articles))
  },[])
  return (
    <div className='container my-5'> 
        <Container>
            <Row>
              
              {
          data.map((value) =>{
            
            return(
              
                <div className="col-4">
                <Card style={{ width: '24rem' }}>
                 
                    <Card.Img variant="top" src={value.urlToImage} />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <span> <strong>Author</strong>: {value.author}</span>
                      <Card.Text>
                        {value.description}
                      </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                </div>
             
            ) 
          })
        }
          
            </Row>
        </Container>
    </div>
  )
}
