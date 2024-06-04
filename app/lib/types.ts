export enum bodyParts {
  "All" = "All",
  "Arm" = "Arm",
  "Leg" = "Leg",
  "Shoulder" = "Shoulder",
  "Chest" = "Chest",
  "Back" = "Back",
  "Abs" = "Abs",
}

export type Clip = {
  name: string;
  bodyPart: bodyParts;
  tips: string;
  link: string;
};

export type ClipState = {
  clips: Clip[];
  filteredClips: Clip[];
  selectedBodyPart: bodyParts | "";
};

export enum ClipActionType {
  SetClips = "SET_CLIPS",
  SetSelectedBodyPart = "SET_SELECTED_BODY_PART",
  FilterClips = "FILTER_CLIPS",
}

export type ClipAction =
  | { type: ClipActionType.SetClips; payload: Clip[] }
  | { type: ClipActionType.SetSelectedBodyPart; payload: bodyParts | "" }
  | { type: ClipActionType.FilterClips };
