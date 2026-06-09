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

