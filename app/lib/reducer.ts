import {
  ClipState,
  ClipAction,
  ClipActionType,
  bodyParts,
} from "@/app/lib/types";

export const clipInitialState: ClipState = {
  clips: [],
  filteredClips: [],
  selectedBodyPart: "",
};

export function clipReducer(state: ClipState, action: ClipAction): ClipState {
  switch (action.type) {
    case ClipActionType.SetClips:
      return {
        ...state,
        clips: action.payload,
        filteredClips: action.payload,
      };
    case ClipActionType.SetSelectedBodyPart:
      return {
        ...state,
        selectedBodyPart: action.payload,
      };
    case ClipActionType.FilterClips:
      return {
        ...state,
        filteredClips: state.clips.filter((clip) =>
          state.selectedBodyPart == bodyParts.All
            ? clip
            : clip.bodyPart == state.selectedBodyPart
        ),
      };
    default:
      throw new Error("Unknown action type");
  }
}
