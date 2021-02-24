export type ActivityInfo = {
  id: string;
  timestamp: Date;
  title: string;
};

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
  activities: {
    [id: string]: ActivityInfo;
  };
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
    activities: {
      one: {
        id: "one",
        timestamp: new Date(),
        title: "First Activity",
      },
      two: {
        id: "two",
        timestamp: new Date(),
        title: "Second Activity",
      },
      three: {
        id: "three",
        timestamp: new Date(),
        title: "Third Activity",
      },
    },
  };
};
