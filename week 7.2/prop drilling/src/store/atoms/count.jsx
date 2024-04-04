import { atom } from 'recoil'

export const countAtom = atom({
    // a default way to uniquely identify this atom.
    // make sure these are unique for each atom.
    key: "countAtom",
    // default value
    default: 0
});