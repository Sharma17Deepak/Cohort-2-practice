import { atom, selector } from "recoil";

export const titleAtom = atom({
    key: "titleAtom",
    default:""
})

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default:""
})

export const searchAtom = atom({
    key: "searchAtom",
    default:""
})

export const todosAtom = atom({
    key: "todosAtom",
    default:[]
})

export const filterSelector = selector({
    key:"filterSelector",
    get: ({get}) => {
        const search = get(searchAtom).trim().toLowerCase();
        const todosList = get(todosAtom);
        return todosList.filter((item) => item.title.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search))
    },
})