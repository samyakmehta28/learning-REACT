import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const fetchData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  const user_response = await response.json();
  //console.log(user_response);
  return user_response;
};

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      //this is how to handle returns from async functions
      fetchData()
        .then((data) => {
          if (!data) {
            setIsError(true);
            return;
          }
          setUser(data);
        })
        .catch((error) => {
          setIsError(true);
        });
    }, 3000);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  if (user) {
    return (
      <>
        <h2>{user.login}</h2>
        <img src={user.avatar_url} alt={user.login} />
        <h3>{user.company}</h3>
      </>
    );
  }
  return <h2>Fetching Data .... </h2>;
};
export default MultipleReturnsFetchData;
