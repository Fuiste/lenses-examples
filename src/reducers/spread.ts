import { State } from "..";

export const sessionReducer = (action: any, state: State): State => {
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
    default:
      return state;
  }
};
