import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Inspiration: https://stackoverflow.com/questions/62504525/persistence-with-localstorage-with-usestate-and-usecontext-react-hooks

var initialState = {
  userId: null,
  likes: [],
  posts: [],
  isAdmin: false,
  answer: {},
  newUser: true,
  cookieAccept: false,
};

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

const getUserData = () => {
  try {
    const saved = localStorage.getItem('userData');
    if (saved) {
      return JSON.parse(saved);
    } else {
      const newUser = initialState;
      newUser.userId = uuidv4();
      localStorage.setItem('userData', JSON.stringify(newUser));
      return newUser;
    }
  } catch (error) {
    console.log(error);
    return initialState;
  }
};

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(() => getUserData());

  useEffect(() => {
    async function fetchData() {
      await setLocalStorage('userData', user);
    }
    fetchData();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        userId: user.userId,
        likes: user.likes,
        posts: user.posts,
        isAdmin: user.isAdmin,
        answer: user.answer,
        newUser: user.newUser,
        cookieAccept: user.cookieAccept,
        setUserId: (userId) => setUser({ ...user, userId }),
        setLikes: (likes) => setUser({ ...user, likes }),
        setPosts: (posts) => setUser({ ...user, posts }),
        setIsAdmin: (isAdmin) => setUser({ ...user, isAdmin }),
        setAnswer: (answer) => setUser({ ...user, answer }),
        setNewUser: (newUser) => setUser({ ...user, newUser }),
        setCookieAccept: (cookieAccept) => setUser({ ...user, cookieAccept }),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };
