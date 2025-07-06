"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // sessionStorageを使って初回アクセスかどうかを判断
  useEffect(() => {
    if (sessionStorage.getItem("initialLoadComplete") === "true") {
      setIsLoading(false);
    }
  }, []);

  const handleSetIsLoading = (loadingState) => {
    setIsLoading(loadingState);
    // 初めてローディングが完了した時に記録
    if (
      !loadingState &&
      sessionStorage.getItem("initialLoadComplete") !== "true"
    ) {
      sessionStorage.setItem("initialLoadComplete", "true");
    }
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading: handleSetIsLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
