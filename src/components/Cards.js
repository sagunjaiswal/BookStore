import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import {Link} from 'react-router-dom';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();


  const send = (e)=>{
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
       <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
              {/* <Link to={`/book/${element.id}`}> */}
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>{element.author}</Card.Text>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
                {/* </Link> */}
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards