import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { useEffect } from "react";

function RefreshUser() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, []);

  return null;
}

export default RefreshUser;
