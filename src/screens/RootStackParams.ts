export enum Difficultly {
  beginner = "beginner",
  advanced = "advanced",
  expert = "expert",
  specialist = "specialist",
}

export interface ILevelDescription {
  level: number;
  difficulty: Difficultly;
  modalVisible?: boolean;
}

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Level: ILevelDescription;
  Camera: undefined;
  Success: undefined;
  SolvedDetail: ILevelDescription;
  Posts: undefined;
  BottomTabs: undefined;
  NewPost: undefined;
};
