import { flow } from "lodash";
import { StatePermuter, UserInfo } from "..";
import * as Lenses from "../lenses";

export const setUser = (user: UserInfo): StatePermuter => Lenses.user.set(user);

export const setUserNameAndEmail = (
  name: UserInfo["name"],
  email: UserInfo["email"]
): StatePermuter =>
  flow(Lenses.userName.set(name), Lenses.userEmail.set(email));
