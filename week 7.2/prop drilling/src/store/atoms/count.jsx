import { atom, selector } from 'recoil'

export const countAtom = atom({
    // a default way to uniquely identify this atom.
    // make sure these are unique for each atom.
    key: "countAtom",
    // default value
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        // this is like the dependency in useMemo, so we are telling our
        // selector to only run this code when the countAtom changes.
        const count = get(countAtom);
        return count %2 ==0;
    }
});