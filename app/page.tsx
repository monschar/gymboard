"use client";
import { useEffect, useReducer } from "react";
import Grid from "./ui/Grid";
import SideNav from "./ui/SideNav";
import { clipInitialState, clipReducer } from "./lib/reducer";
import { ClipActionType } from "./lib/types";
import clips from "./lib/place-holder";

export default function Home() {
  const [state, dispatch] = useReducer(clipReducer, clipInitialState);

  useEffect(() => {
    dispatch({ type: ClipActionType.SetClips, payload: clips });
  }, []);
  return (
    <SideNav dispatch={dispatch}>
      <Grid clips={state.filteredClips} />
    </SideNav>
  );
}
