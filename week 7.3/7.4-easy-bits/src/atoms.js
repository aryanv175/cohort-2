import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    defaul: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    defaul: 0
});

export const messagingAtom = atom({
    key: "networkAtom",
    defaul: 0
});

export const notificationsAtom = atom({
    key: "networkAtom",
    defaul: 12
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})