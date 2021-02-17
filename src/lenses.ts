import { Lens, Prism } from "@atomic-object/lenses";
import produce from "immer";
import { State, UserInfo } from ".";

// Base lenses
export const session = Lens.from<State>().prop("session");
export const user = Lens.from<State>().prop("user");

// User lenses
export const name = user.comp(Lens.from<UserInfo>().prop("name"));
export const email = user.comp(Lens.from<UserInfo>().prop("email"));

// Session lenses
export const token = Prism.of<State, string | undefined>({
  get: (state) => state.session?.token,
  set: (state, token) => {
    if (token !== undefined && state.session !== undefined) {
      return produce(state, (newState) => {
        newState.session.token = token;
      });
    }
  },
});
export const refreshedOn = Prism.of<State, Date | undefined>({
  get: (state) => state.session?.metadata.refreshedOn,
  set: (state, newDate) => {
    if (newDate !== undefined && state.session !== undefined) {
      return produce(state, (newState) => {
        newState.session.metadata.refreshedOn = newDate;
      });
    }
  },
});
