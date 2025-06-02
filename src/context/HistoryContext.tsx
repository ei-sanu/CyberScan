import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScanResult {
  url: string;
  timestamp: number;
  isMalicious: boolean;
  threatDetails?: string[];
  threatLevel?: 'low' | 'medium' | 'high' | 'critical';
}

interface HistoryContextType {
  history: ScanResult[];
  addToHistory: (result: ScanResult) => void;
  clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<ScanResult[]>([]);

  const addToHistory = (result: ScanResult) => {
    setHistory((prev) => [result, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};