import { useState } from "react";

export const useLoading = (initialStatus: boolean = false) => {
  const [status, setStatus] = useState(initialStatus);
  const startLoading = () => {
    setStatus(true);
  };

  const stopLoading = () => {
    setStatus(false);
  };

  return {
    status,
    startLoading,
    stopLoading
  };
};
