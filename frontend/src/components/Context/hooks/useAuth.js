import { useCallback, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import api from '../../../service/api';
import history from '../../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('@token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    const { data } = await api.post('/auth', { email, password });

    setUser(data);
    localStorage.setItem('@token', data.token);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    setAuthenticated(true);
    history.push('/auth/animals');
  }

  const handleLogout = useCallback(() => {
    setAuthenticated(false);
    localStorage.removeItem('@token');
    api.defaults.headers.Authorization = undefined;
    history.push('/sign-in');
  }, []);

  return { loading, handleLogin, handleLogout, authenticated, user };
}
