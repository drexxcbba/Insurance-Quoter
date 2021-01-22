import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resumee from './components/Resumee';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumee, setResumee] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);

  const { quote, data } = resumee;

  return (
    <Container>
      <Header
        titulo="Cotizador de seguros" 
      />
      <ContainerForm>
        <Form 
         setResumee={setResumee}
         setLoading={setLoading}
         />
        {loading ? <Spinner /> : null}
        {!loading ? (<Resumee data={data}/>) : null}
        {!loading ? <Result quote={quote}/> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
