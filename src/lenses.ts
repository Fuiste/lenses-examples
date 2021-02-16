import { Lens, Prism } from "@atomic-object/lenses";
import produce from "immer";
import { State, UserInfo } from ".";

// Base lenses
export const session = Lens.from<State>().prop("session");
export const user = Lens.from<State>().prop("user");

// User lenses
export const userName = user.comp(Lens.from<UserInfo>().prop("name"));
export const userEmail = user.comp(Lens.from<UserInfo>().prop("email"));

// Session lenses
export const sessionToken = Prism.of<State, string | undefined>({
  get: (state) => state.session?.token,
  set: (state, token) => {
    if (token !== undefined && state.session !== undefined) {
      return produce(state, (newState) => {
        newState.session = { ...state.session, token };
      });
    }
  },
});
