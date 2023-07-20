import { useEffect } from 'react';
import { useState } from 'react';
import { debounce, throttle } from 'lodash';
/* API is needed to deliever an id based on provided user name length
HTML will need an input for that
*/

const ping = 5 * 1000;
const api = (userName) =>
  new Promise((resolve, reject) => {
    const mockedResponseFromServer = userName.length;
    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },
        status: 200,
        message: 'OK',
      });
    }, ping);
  });

const debouncedApi = debounce(api, 500);

export function TryCatchAndFinally() {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserId = async (userName) => {
      if (!userName) {
        return;
      }
      try {
        const { data } = await debouncedApi(userName);
        console.log('Dla tego uzytkownika id to: ' + data.id);
      } catch (err) {
        console.log(err);
      }
    };
    getUserId(userName);
  }, [userName]);

  const handleAddName = (userName) => {
    setUserName(userName);
  };

  const throtleHandleAddName = throttle(handleAddName, 2000);
  return (
    <div>
      Podaj imię:
      <input
        type="text"
        value={userName}
        onChange={(event) => {
          throtleHandleAddName(event.target.value);
        }}
      />
    </div>
  );
}
