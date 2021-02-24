import { State } from "..";

export const exampleReducer = (action: any, state: State): State => {
  switch (action.type) {
    case "REFRESH_TOKEN_SUCCESS":
      if (state.session !== undefined) {
        return {
          ...state,
          session: {
            ...state.session,
            token: action.token,
            metadata: {
              ...state.session.metadata,
              refreshedOn: new Date(),
            },
          },
        };
      }

      return state;
    case "UPDATE_ACTIVITY":
      const { activity } = action;
      return {
        ...state,
        activities: {
          ...state.activities,
          [activity.id]: activity,
        },
      };
    default:
      return state;
  }
};
