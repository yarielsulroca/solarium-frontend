import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyCard from './MyCard';

const RenderCards = () => {
    const [ data, setData ] = useState( [] );

    useEffect( () => {

        axios.get( 'https://127.0.0.1/solarium-app/api-app/public/api/promocion' )
            .then( response => {
                setData( response.data );
            } )
            .catch( error => {
                console.error( 'There was an error!', error );
            } );
    }, [] );
    return (

        <div className=" d-flex flex-wrap justify-content-center gap-3 ">
            { data.map( (item) => (
                <MyCard key={ item.id } titulo={ item.titulo } descripcion={ item.descripcion }/>
            ) ) }

        </div>

    );
};

export default RenderCards;
