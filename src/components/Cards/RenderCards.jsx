import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyCard from './MyCard';


const RenderCards = () => {
    const [ data, setData ] = useState( [] );

    useEffect( () => {

        axios.get( 'https://sulroca.getthost.com/api/promocion' )
            .then( response => {
                setData( response.data );
            } )
            .catch( error => {
                console.error( 'There was an error!', error );
            } );
    }, [] );
    return (
        <div className=" d-flex flex-wrap justify-content-center gap-3"
        style={{ marginBottom:'100px'}}>
                    {data.map( (item) => (
                        <MyCard key={ item.id } titulo={ item.titulo } descripcion={ item.descripcion }/>
                    ))}
        </div>

    );
};

export default RenderCards;
