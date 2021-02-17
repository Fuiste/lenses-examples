export type SessionInfo = {
  token: string;
  metadata: {
    refreshedOn: Date;
    isAdmin: boolean;
  };
};

export type UserInfo = {
  name: string;
  email?: string;
  widgets: number;
};

export type State = {
  user: UserInfo;
  session: SessionInfo | undefined;
};

export type StatePermuter = (state: State) => State;

export const initialState = (): State => {
  return {
    user: {
      name: "Rudy Pelrine",
      email: "fuiste@test.com",
      widgets: 42,
    },
    session: {
      token: "asdf1234",
      metadata: {
        isAdmin: false,
        refreshedOn: new Date(),
      },
    },
  };
};
