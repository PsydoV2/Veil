import { createContext, useContext, useState } from "react";

export interface Tab {
  id: number;
  title: string;
  url: string;
  favicon?: string;
}

interface TabContextValue {
  tabs: Tab[];
  activeTabId: number;
  addTab: (url?: string) => void;
  removeTab: (id: number) => void;
  setActiveTab: (id: number) => void;
  updateTab: (id: number, partial: Partial<Tab>) => void;
}

const TabContext = createContext<TabContextValue | null>(null);

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: "New Tab", url: "https://google.com" },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);

  const addTab = (url = "https://google.com") => {
    const newTab = {
      id: Date.now(),
      title: "New Tab",
      url,
    };
    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newTab.id);
  };

  const removeTab = (id: number) => {
    setTabs((prev) => prev.filter((t) => t.id !== id));
    if (id === activeTabId && tabs.length > 1) {
      const fallback = tabs.find((t) => t.id !== id)?.id || 0;
      setActiveTabId(fallback);
    }
  };

  const setActiveTab = (id: number) => {
    setActiveTabId(id);
  };

  const updateTab = (id: number, partial: Partial<Tab>) => {
    setTabs((prev) =>
      prev.map((tab) => (tab.id === id ? { ...tab, ...partial } : tab))
    );
  };

  return (
    <TabContext.Provider
      value={{ tabs, activeTabId, addTab, removeTab, setActiveTab, updateTab }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("useTabContext must be used inside TabProvider");
  return ctx;
}
