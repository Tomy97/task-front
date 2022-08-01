import { useRef, useState } from "react";

export const useLoading = (initialStatus: boolean = false) => {
  const [loading, setLoading] = useState(initialStatus);
  const setSearch = (status: boolean) => {
    console.log(status);
    setLoading(status);
  };
  return {
    loading,
    setSearch
  };
};
