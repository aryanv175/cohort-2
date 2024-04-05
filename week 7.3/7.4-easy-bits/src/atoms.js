import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const messagingAtom = atom({
    key: "networkAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "networkAtom",
    default: 102
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    value: ({get}) => {
        const networkAtom = get(networkAtom);
        const jobsAtom = get(jobsAtom);
        const messagingAtom = get(messagingAtom);
        const totalNotificationSelector = get(totalNotificationSelector);
        return networkAtomCount = networkAtom + jobsAtom + messagingAtom + totalNotificationSelector
    }
})