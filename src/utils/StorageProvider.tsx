import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Difficultly } from "../screens/RootStackParams";
import { MAX_LEVELS } from "../../config/constants";
import NetInfo from "@react-native-community/netinfo";

export interface ILevelType {
  level: number;
  difficulty: Difficultly;
  time: {
    start: Date;
    end: Date | null;
  };
  tries: number;
}

export interface UserState {
  savedLevels: ILevelType[];
  beginnerLevel: number;
  advancedLevel: number;
  expertLevel: number;
  specialistLevel: number;
}

export const StorageContext = createContext<{
  state: UserState;
  newTask: ILevelType | null;
  setNewTask: (level: ILevelType | null) => void;
  save: () => void;
  clearStorage: () => Promise<void>;
  saveLevel: (level: ILevelType) => Promise<void>;
  getTime: (
    startTime: Date,
    endTime: Date
  ) => {
    hours: number;
    minutes: number;
    seconds: number;
  };
  resetLevel: (difficulty: Difficultly) => void;
  internet: boolean;
}>({} as any);

export const StorageProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState<UserState>({
    savedLevels: [],
    advancedLevel: 1,
    beginnerLevel: 1,
    expertLevel: 1,
    specialistLevel: 1,
  });
  const [newTask, setNewTask] = useState<ILevelType | null>(null);
  const [internet, setInternet] = useState(false);

  useEffect(() => {
    (async () => {
      const item = await AsyncStorage.getItem("storage");
      if (item) {
        setState(JSON.parse(item));
      }
    })();
  }, []);

  const save = async () => {
    await AsyncStorage.setItem("storage", JSON.stringify(state));
  };

  const getTime = (startTime: Date, endTime: Date) => {
    const totalSeconds = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor((totalSeconds % 3600) % 60);

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const resetLevel = (difficulty: Difficultly) => {
    switch (difficulty) {
      case "beginner":
        setState({ ...state, beginnerLevel: 1 });
        break;
      case "advanced":
        setState({ ...state, advancedLevel: 1 });
        break;
      case "expert":
        setState({ ...state, expertLevel: 1 });
        break;
      case "specialist":
        setState({ ...state, specialistLevel: 1 });
        break;
    }
  };

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setInternet(state.isConnected ?? false);
    });
  }, []);

  return (
    <StorageContext.Provider
      value={{
        state,
        newTask,
        setNewTask,
        save,
        clearStorage: async () => {
          await AsyncStorage.removeItem("storage");
          setState({
            savedLevels: [],
            advancedLevel: 1,
            beginnerLevel: 1,
            expertLevel: 1,
            specialistLevel: 1,
          });
        },
        saveLevel: async (level: ILevelType) => {
          state?.savedLevels.push(level);

          switch (level.difficulty) {
            case "beginner":
              if (state.beginnerLevel === MAX_LEVELS) {
                setState({ ...state, beginnerLevel: 1 });
                return;
              }
              setState({ ...state, beginnerLevel: level.level + 1 });
              break;
            case "advanced":
              if (state.advancedLevel === MAX_LEVELS) {
                setState({ ...state, advancedLevel: 1 });
                return;
              }
              setState({ ...state, advancedLevel: level.level + 1 });
              break;
            case "expert":
              if (state.expertLevel === MAX_LEVELS) {
                setState({ ...state, expertLevel: 1 });
                return;
              }
              setState({ ...state, expertLevel: level.level + 1 });
              break;
            case "specialist":
              if (state.specialistLevel === MAX_LEVELS) {
                setState({ ...state, specialistLevel: 1 });
                return;
              }
              setState({ ...state, specialistLevel: level.level + 1 });
              break;
          }
          setNewTask(null);
          save();
        },
        getTime,
        resetLevel,
        internet,
      }}>
      {children}
    </StorageContext.Provider>
  );
};
