import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, resetAuth } from "../reducers/auth";
import { resetData } from "../reducers/data";
import { STORAGE_NAME } from "../constants/constants";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  const login = useCallback(
    (jwtToken, id) => {
      setToken(jwtToken);
      setUserId(id);

      localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify({
          userId: id,
          token: jwtToken,
        })
      );

      const isAuthenticated = !!jwtToken;
      dispatch(setAuth({ token: jwtToken, userId: id, isAuthenticated }));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(STORAGE_NAME);
    dispatch(resetAuth());
    dispatch(resetData());
  }, [dispatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_NAME));

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};
