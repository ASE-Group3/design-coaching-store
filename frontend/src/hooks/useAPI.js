import { useState, useCallback } from "react";
import axios from "axios";
import qs from "qs";
import { API_URL } from "./config";

const API = (
  { path, method = "GET" },
  { onCompleted = (response) => {}, onError = (error) => {} } = {}
) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const refetch = useCallback(async (variables = {}) => {
    setLoading(true);

    if (method === "GET") {
      await axios
        .get(API_URL + path + "?" + qs.stringify(variables))
        .then((res) => {
          setResponse(res.data);
          setLoading(false);
          onCompleted && onCompleted(res);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          onError && onError(error);
        });
    } else {
      await axios
        .post(API_URL + path, variables)
        .then((res) => {
          setResponse(res.data);
          setLoading(false);
          onCompleted && onCompleted(res);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          onError && onError(error);
        });
    }
  }, []);

  const makeRequest = useCallback(async (variables = {}) => {
    setLoading(true);

    if (method === "GET") {
      await axios
        .get(API_URL + path + "?" + qs.stringify(variables))
        .then((res) => {
          setResponse(res.data);
          setLoading(false);
          onCompleted && onCompleted(res);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          onError && onError(error);
        });
    } else {
      await axios
        .post(API_URL + path, variables)
        .then((res) => {
          setResponse(res.data);
          setLoading(false);
          onCompleted && onCompleted(res);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          onError && onError(error);
        });
    }
  }, []);

  return [
    makeRequest,
    { loading, data: response, error, refetch: () => refetch() },
  ];
};

export default API;
