export const Header = () => {
    return (
        <div className="flex justify-center items-center relative top-3">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#" className="nav-link bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Projects</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
        </div>
    );
}