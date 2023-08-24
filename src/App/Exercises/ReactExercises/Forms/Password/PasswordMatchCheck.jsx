import { useState } from 'react';

export function PasswordMatchCheck() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === repeatPassword);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };
}
