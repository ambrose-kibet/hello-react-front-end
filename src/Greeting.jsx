import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/features/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { isLoading, greeting } = useSelector((state) => state.greetings);
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  if (isLoading) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
  }

  return (
    <div>
      <h1>{(greeting && greeting) || 'Hello world'}</h1>
      <button onClick={() => dispatch(getGreeting())}>change greeting</button>
    </div>
  );
};
export default Greeting;
