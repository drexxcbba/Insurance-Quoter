import React from 'react';
import styled from '@emotion/styled';
import { firstMayus } from '../helper';
import PropTypes from 'prop-types';

const ContainerResumee = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumee = ({data}) => {

    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '') return null;

    return ( 
        <ContainerResumee>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstMayus(brand)}</li>
                <li>Plan: {firstMayus(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContainerResumee>
     );
}

Resumee.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resumee;