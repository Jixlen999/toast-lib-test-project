import { useState } from 'react';
import { Toasts } from 'jix-toast-library';
import DefaultToasts from '@components/DefaultToasts';
import Details from '@components/Details';
import Wrapper from './styled';

function App() {
  const [toasts, setToasts] = useState([]);

  return (
    <Wrapper>
      <DefaultToasts setToasts={setToasts} />
      <Details setToasts={setToasts} />
      <Toasts toasts={toasts} />
    </Wrapper>
  );
}

export default App;
