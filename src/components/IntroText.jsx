import React from 'react';
import { introTextMap } from '../utils/consts';
import PropTypes from 'prop-types';


const IntroText = ( { name } ) => {

    const text = introTextMap[ name ];

    return (
        <div>
            <p>{ text }</p>
        </div>
    );
};

IntroText.propTypes = {
    name: PropTypes.oneOf( [ 'inicio', 'promociones', 'contactanos','solarium' ] ),
};

export default IntroText;
