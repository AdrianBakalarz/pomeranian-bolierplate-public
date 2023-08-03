import './TodoForm.css';
import { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../index';
import { isError } from 'lodash';

export function TodoForm({ setAddingMode }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  async function handleCreateTodo() {
    try {
      await axios.post(BASE_API_URL + /todo/, {
        title, // === title: title
        author, // === author: author
        note, // === note: note
      });
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  }

  const isReadyToSend =
    title.length > 0 && author.length > 0 && note.length > 0;

  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label className="todo-form__field__label">Tytuł</label>
        <input
          type="text"
          placeholder="Kup ser"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div className="todo-form__field">
        <label className="todo-form__field__label">Autor</label>
        <input
          type="text"
          placeholder="Jan Kowalski"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>

      <div className="todo-form__field">
        <label className="todo-form__field__label">Treść</label>
        <textarea
          placeholder="Kup ser w biedronce"
          rows={5}
          cols={25}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </div>

      {isSuccess && (
        <p className="todo-form__message-success">TODO "{title}" dodało się!</p>
      )}

      {isError && (
        <p className="todo-form__message-error">
          Wystąpił błąd, spróbuj ponownie później
        </p>
      )}

      <div className="todo-form__buttons">
        <button
          className="button-back"
          onClick={() => {
            setAddingMode(false);
          }}
        >
          COFNIJ
        </button>
        <button
          className="button-add"
          onClick={() => {
            handleCreateTodo();
          }}
          disabled={!isReadyToSend}
        >
          DODAJ
        </button>
      </div>
    </div>
  );
}
