import { atom, selector } from 'recoil'

export const countAtom = atom({
    // a default way to uniquely identify this atom.
    // make sure these are unique for each atom.
    key: "countAtom",
    // default value
    default: 0
});

export const evenSelector = selector({
    name: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count %2 ==0;
    }
})