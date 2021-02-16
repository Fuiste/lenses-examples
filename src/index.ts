import { isEqual } from "lodash";
import * as Spread from "./permuters/spread";
import * as Lenses from "./permuters/lenses";

export type SessionInfo = {
  token: string;
  metadata: {
    loggedInOn: Date;
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

const initialState = (): State => {
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
        loggedInOn: new Date(),
      },
    },
  };
};

const comparePermutations = (
  fna: StatePermuter,
  fnb: StatePermuter,
  state = initialState()
) => {
  const newA = fna(state);
  const newB = fnb(state);

  console.log(`States are equal? ${isEqual(newA, newB)}`);
};

const newUser: UserInfo = {
  name: "Will Pelrine",
  email: "will@test.com",
  widgets: 500,
};

comparePermutations(Spread.setUser(newUser), Lenses.setUser(newUser));
comparePermutations(
  Spread.setUserNameAndEmail(newUser.name, newUser.email),
  Lenses.setUserNameAndEmail(newUser.name, newUser.email)
);
