import Register from './register';
import { useState } from 'react';

const Prop = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <Register setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default Prop;
