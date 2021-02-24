import { flow } from "lodash";
import { State } from "..";
import * as Lenses from "../lenses";

export const exampleReducer = (action: any, state: State): State => {
  switch (action.type) {
    case "REFRESH_TOKEN_SUCCESS":
      return flow(
        Lenses.token.set(action.token),
        Lenses.refreshedOn.set(new Date())
      )(state);
    case "UPDATE_ACTIVITY":
      const { activity } = action;
      return Lenses.activity(activity.id).set(activity)(state);
    default:
      return state;
  }
};
