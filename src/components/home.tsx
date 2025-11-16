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
    const projects = [
        {
            link: "https://photography.ricardomoralesgonzalez.com/",
            title: "Photography Portfolio",
            description: "Full-stack photography portfolio built with Next.js, React, Tailwind CSS, NestJS, PostgreSQL, Google Cloud Storage, and Azure App Service, all managed through GitHub Actions for seamless CI/CD."
        },
        {
            link: "https://song-info-one.vercel.app/",
            title: "Spotify Song Info",
            description: "Get some of the metadata correspondig to your favorite Spotify songs. This app uses the Spotify API to fetch song information."
        },
        {
            link: "https://noturavganimefan.github.io/manga-creation/",
            title: "AI Manga Cover",
            description: "Create your own manga cover using AI. Simply provide a title and a description and let AI do the rest!"
        },
        {
            link: "https://noturavganimefan.github.io/sticky-notes/",
            title: "Sticky Notes",
            description: "A simple and intuitive sticky notes application built with React."
        },
        {
            link: "https://noturavganimefan.github.io/sleepy-times/",
            title: "Etch-A-Sketch",
            description: "Draw what your heart desires on this near infinite canvas."
        }
    ]


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
                    {projects.map((project) => (
                        <li>
                            <a href={project.link} target='_blank' className="text-blue-400 hover:underline">
                                {project.title}
                            </a>: {project.description}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            <h2 className="text-base sm:text-lg pt-4 font-bold">Resume</h2>
            <Resume />
            {/* <h2 className="text-base sm:text-lg pt-4 font-bold">About Me</h2> */}
            <div className="p-5">
                <p className="text-xs sm:text-sm italic">
                    Portfolio created in its entirety by Ricardo Manuel Morales Gonzalez
                </p>
            </div>
        </div>
    </div>
    )

}