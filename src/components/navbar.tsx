import Navmenu from './navmenu.tsx';

export default function Navbar() {
    return (
    <div className="flex justify-evenly items-center pt-5">
        <h1 className="text-3xl font-bold text-center text-white">
            Ricardo Manuel Morales Gonzalez
        </h1>
        <Navmenu />
    </div>
    )

}