import { useState } from "react";
import { RequestStatuses } from "../const/requestStatuses";

const useFetching = (callback) => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      setStatus(RequestStatuses.LOADING);
      await callback(...args);
      setStatus(RequestStatuses.SUCCEEDED);
    } catch (error) {
      setError(error.message);
      setStatus(RequestStatuses.FAILED);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error, status];
};

export default useFetching;
