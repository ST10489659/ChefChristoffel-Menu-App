import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { MenuItem } from './types';

interface MenuContextType {
  menuItems: MenuItem[];
  saveMenuItems: (items: MenuItem[]) => Promise<void>;
  isLoading: boolean;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const start = Date.now();
      await loadMenuItems();
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 2500 - elapsed);
      setTimeout(() => {
        if (mounted) setIsLoading(false);
      }, remaining);
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  const loadMenuItems = async (): Promise<void> => {
    try {
      const stored = await AsyncStorage.getItem('menuItems');
      if (stored) {
        setMenuItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading menu items:', error);
    }
  };

  const saveMenuItems = async (items: MenuItem[]): Promise<void> => {
    try {
      await AsyncStorage.setItem('menuItems', JSON.stringify(items));
      setMenuItems(items);
    } catch (error) {
      console.error('Error saving menu items:', error);
    }
  };

  return (
    <MenuContext.Provider value={{ menuItems, saveMenuItems, isLoading }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};