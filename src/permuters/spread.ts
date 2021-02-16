import { StatePermuter, UserInfo } from "..";

export const setUser = (user: UserInfo): StatePermuter => {
  return (state) => ({
    ...state,
    user,
  });
};

export const setUserNameAndEmail = (
  name: UserInfo["name"],
  email: UserInfo["email"]
): StatePermuter => {
  return (state) => {
    const { user: prevUser } = state;

    return {
      ...state,
      user: {
        ...prevUser,
        name,
        email,
      },
    };
  };
};
