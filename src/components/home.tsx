import { TypeAnimation} from 'react-type-animation';
import Resume from './resume.tsx';

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
                I am a Software Engineer with a B.S. in Computer Science from Johns Hopkins University and a background in full-stack web development. My expertise lies in building functional, scalable applications using React and Node.js. Over the past year, I've applied these skills in the AI space at Ringer Science with Python as my main development language, engineering conversational chatbots that distill complex data into digestible insights, empowering users to make data-driven decisions.
            </p>
            <h2 className="text-base sm:text-lg pt-4 font-bold">Projects</h2>
            <div className='flex flex-col items-center'>
                <div className='text-xs sm:text-sm text-left sm:max-w-3xl'>
                <ul className="list-disc list-inside pt-2">
                    <li>
                        <a href="https://song-info-one.vercel.app/" target='_blank' className="text-blue-400 hover:underline">
                            Spotify Song Info
                        </a>: Get some of the metadata correspondig to your favorite Spotify songs. This app uses the Spotify API to fetch song information.
                    </li>
                    <li>
                        <a href="https://noturavganimefan.github.io/manga-creation/" target='_blank' className="text-blue-400 hover:underline">
                            AI Manga Cover
                        </a>: Create your own manga cover using AI. Simply provide a title and a description and let AI do the rest!
                    </li>
                    <li>
                        <a href="https://noturavganimefan.github.io/sticky-notes/" target='_blank' className="text-blue-400 hover:underline">
                            Sticky Notes
                        </a>: A simple and intuitive sticky notes application built with React.
                    </li>
                    <li>
                        <a href="https://noturavganimefan.github.io/sleepy-times/" target='_blank' className="text-blue-400 hover:underline">
                            Sleepy Times
                        </a>: Want to know when to fall asleep to wake up feeling amazing? Use this calculator to know when you should fall asleep based on sleep cycles.
                    </li>
                    <li>
                        <a href="https://etch-a-sketch-nu-five.vercel.app/" target='_blank' className="text-blue-400 hover:underline">
                            Etch-A-Sketch
                        </a>: Draw what your heart desires on this near infinite canvas.
                    </li>




                </ul>
            </div>
            </div>
            <h2 className="text-base sm:text-lg pt-4 font-bold">Resume</h2>
            <Resume />
            {/* <h2 className="text-base sm:text-lg pt-4 font-bold">About Me</h2> */}
        </div>
    </div>
    )

}