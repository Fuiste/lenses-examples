import * as SpreadReducers from "./spread";
import * as LensReducers from "./lenses";
import * as Lenses from "../lenses";
import { initialState } from "..";

describe("sessionReducer", () => {
  const token = "testing123";
  const action = { type: "REFRESH_TOKEN_SUCCESS", token };
  const state = initialState();

  it("sets the token with both reducers", () => {
    const spreadState = SpreadReducers.sessionReducer(action, state);
    const lensState = LensReducers.sessionReducer(action, state);

    expect(Lenses.token(spreadState)).toEqual(token);
    expect(Lenses.token(lensState)).toEqual(token);
  });

  it("makes the same change with both reducers", () => {
    const spreadState = SpreadReducers.sessionReducer(action, state);
    const lensState = LensReducers.sessionReducer(action, state);

    expect(spreadState).toEqual(lensState);
  });
});
