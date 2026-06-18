import { SearchBar } from "./SearchBar";


export default function NavBar(){
    return (
        <div className="flex justify-between items-center p-3">
            <div className="w-10 flex items-center cursor-pointer"><img src={"/youtube.jpg"} className=""></img>YouTube</div>
            <div><SearchBar/></div>
            <div className="cursor-pointer">Signin</div>
        </div>
    )
}