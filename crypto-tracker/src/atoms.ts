// instead of traveling props, use atom = piece of a state in the app
// app can have many atoms
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
