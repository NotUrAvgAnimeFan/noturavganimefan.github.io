import Navbar from './navbar.tsx';
import About from './about.tsx';

export default function Home() {
    return (
    <div className="min-h-screen bg-gray-600 px-8 font-[Rationale]">
        <div className='lg:max-w-1/2 mx-auto'>
            <Navbar />
            <About />
        </div>
    </div>
    )
    
}