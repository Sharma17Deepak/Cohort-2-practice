import { selector } from "recoil";
import { searchAtom, todosAtom } from "../atoms/todo";

export const filterSelector = selector({
    key:"filterSelector",
    get: ({get}) => {
        const search = get(searchAtom).trim().toLowerCase();
        const todosList = get(todosAtom);
        return todosList.filter((item) => item.title.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search))
    },
})