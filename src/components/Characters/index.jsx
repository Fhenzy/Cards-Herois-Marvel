import React, { useEffect, useState, useCallback } from 'react';
import Api from '../services/Api.jsx';
import {Container, Card, List, Photo, Title } from './styled'
import './estilo.css'

const Characters = () => {
   const [char, setChar] = useState([]);

  useEffect(() =>{
    Api.get('/characters')
    .then(response => {
      console.log(response.data.data.results);
      setChar(response.data.data.results);  
    });
    
  },[]);

  const handle = useCallback(async () => {
    try {
      const offset = char.length;
      const response = await Api.get('characters', {
        params: {
           offset,
          },
      });
      setChar([...char, ...response.data.data.results])
    }
    catch(err) {console.log(err)}
  },[char])

  
  
return ( 
  
  <Container className="container-fluid d-flex justify-content-center">
    <List className="row">
       {char.map( (character) => {
      return (
       <div>
        <Card className="ml-3 mr-3"
           key={character.id}>
           <Photo src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
           <Title> {character.name} </Title>
        </Card>
       </div>
        )
      })}  
      
    </List>
    
    <button onClick={handle} 
            type="button" 
            class="btn btn-danger pl-5 pr-5 py-2 mb-4"> 
          <i class="fas fa-mouse"></i>  Ver mais
    </button>
  </Container>
 )
}
export default Characters;