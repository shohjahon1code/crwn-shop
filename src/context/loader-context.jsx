import { createContext, useState } from "react";

export const LoaderContext = createContext({
  loading: true,
});

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const value = {
    loading,
    setLoading,
  };

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

export default LoaderProvider
