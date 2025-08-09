import { TypeAnimation} from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        3000,
        'Web Developer',
        3000,
        'Data Analyst',
        3000,
        'Data Scientist',
        3000,
        'Tinkerer',
        3000
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};



export default function Home() {
    return (
    <div className="min-h-screen bg-gray-900 px-8 font-mono flex flex-col items-center">
        <div className="text-white text-center sm:max-w-3xl">
            <h1 className="text-lg sm:text-2xl font-bold text-center text-white pt-10">
                Ricardo Manuel Morales Gonzalez
            </h1>
            <div className='text-base sm:text-lg pt-2'>
                <ExampleComponent />
            </div>
            <p className="text-xs sm:text-sm pt-2 text-left">
                I am a software engineer and web developer with a passion for creating beautiful and functional websites and applications. I am a graduate from The Johns Hopkisn University with a bachelor's in Computer Science and a minor in Entrepreneurship and Management. In addition to working with modern frameworks like React and Node.js, I have been working with AI tools and LLMs over the past year at Ringer Sciences creating insightful chatbots that enhance and breakdown complex data analytics into digestable insights for users of all levels.
            </p>
            <h2 className="text-base sm:text-lg pt-4 font-bold">Projects</h2>
            <div className='flex flex-col items-center'>
                <div className='text-xs sm:text-sm text-left sm:max-w-3xl'>
                <ul className="list-disc list-inside pt-2">
                    <li>
                        <a href="https://noturavganimefan.github.io/sleepy-times/" target='_blank' className="text-blue-400 hover:underline">
                            Sleepy Times
                        </a>: Want to know when to fall asleep to wake up feeling amazing? Use this calculator to know when you should fall asleep based on sleep cycles.
                    </li>
                    <li>
                        <a href="https://noturavganimefan.github.io/sticky-notes/" target='_blank' className="text-blue-400 hover:underline">
                            Sticky Notes
                        </a>: A simple and intuitive sticky notes application built with React.
                    </li>
                    <li>
                        <a href="https://noturavganimefan.github.io/manga-creation/" target='_blank' className="text-blue-400 hover:underline">
                            AI Manga Cover
                        </a>: Create your own manga cover using AI. Simply provide a title and a description and let AI do the rest!
                    </li>
                </ul>
            </div>
            </div>
            
        </div>        
    </div>
    )
    
}