import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { requestUserData } from './redux/actions/user';


function App() {
  const user = useSelector(({ user }) => user.item);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUserData())
  }, [])

  return (
    <div>
      {
        user &&
        <div>
          <div>{`${user.name.first} ${user.name.last}`}</div>
          <div><img src={user.picture.large} alt="pic" /></div>
        </div>
      }
    </div>

  );
}

export default App;
