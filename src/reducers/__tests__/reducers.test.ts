import * as SpreadReducers from "../spread";
import * as LensReducers from "../lenses";
import * as Lenses from "../../lenses";
import { ActivityInfo, initialState } from "../..";

describe("exampleReducer", () => {
  const token = "testing123";
  const activity: ActivityInfo = {
    id: "four",
    timestamp: new Date(),
    title: "Fourth activity",
  };
  const refreshToken = { type: "REFRESH_TOKEN_SUCCESS", token };
  const updateActivity = { type: "UPDATE_ACTIVITY", activity };
  const state = initialState();

  it("REFRESH_TOKEN_SUCCESS sets the token with both reducers", () => {
    const spreadState = SpreadReducers.exampleReducer(refreshToken, state);
    const lensState = LensReducers.exampleReducer(refreshToken, state);

    expect(Lenses.token(spreadState)).toEqual(token);
    expect(Lenses.token(lensState)).toEqual(token);
  });

  it("REFRESH_TOKEN_SUCCESS makes the same change with both reducers", () => {
    const spreadState = SpreadReducers.exampleReducer(refreshToken, state);
    const lensState = LensReducers.exampleReducer(refreshToken, state);

    expect(spreadState).toEqual(lensState);
  });

  it("UPDATE_ACTIVITY updates the activity with both reducers", () => {
    const spreadState = SpreadReducers.exampleReducer(updateActivity, state);
    const lensState = LensReducers.exampleReducer(updateActivity, state);

    expect(Lenses.activity(activity.id)(spreadState)).toEqual(activity);
    expect(Lenses.activity(activity.id)(lensState)).toEqual(activity);
  });

  it("UPDATE_ACTIVITY makes the same change with both redicers", () => {
    const spreadState = SpreadReducers.exampleReducer(updateActivity, state);
    const lensState = LensReducers.exampleReducer(updateActivity, state);

    expect(spreadState).toEqual(lensState);
  });
});
