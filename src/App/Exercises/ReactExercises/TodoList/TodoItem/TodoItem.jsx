import './TodoItem.css';
import { formatDate } from '../../../../helpers/formatDate';
import { BinIcon } from '../../../../Images/Icons/BinIcon/BinIcon';
import { BASE_API_URL } from '..';
import axios from 'axios';
import { useState } from 'react';

export function TodoItem({ todo, handleFetchTodoData }) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);

  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + /todo/ + id)
      .then((response) => {
        console.log('usunięty todo id: ', response);
        handleFetchTodoData();
      })
      .catch((error) => {
        console.log('usuwanie nie udało się: ', error);
        setRemoveError(true);
      });

    axios.delete(BASE_API_URL + '/todo/' + id);
  }

  return (
    <div className={itemClasses}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__actions__button 
          todo-item__actions__icon"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={isRemoveError} />
        </button>
        {isRemoveError && (
          <div className="todo-item__actions__error-message">
            nie udało się usunąć
          </div>
        )}

        {isDone && (
          <>
            <div
              className="todo-item__actions__icon 
              todo-item__actions__icon--check-mark"
            >
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}

/*  -------DONE-----------
    utworzenie buttona 
    wybór elementu do usunięcia
    request do API
    sprawdzenie czy API wykonało usunięcie todo'sa
    zaktualizowanie listy todo'sów po usunięciu
*/  

