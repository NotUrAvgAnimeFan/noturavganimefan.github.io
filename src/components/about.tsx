import Selfie from "../assets/selfie.jpg"

export default function About() {
    return (
        <div className="flex justify-evenly items-center mt-10">
            <div className="text-left text-white w-1/2 text-lg" id="about">
                <p>- Hi my name is Ricardo Manuel Morales Gonzalez, and I am a software developer.</p>
                <p>- I graduated from The Johns Hopkins Univeristy in May 2024 with a degree in Computer Science and a minor in Entrepreneurship and Management</p>
                <p>- I am currently developing this portfolio website to showcase my skills and projects.</p>
                <p>- Take a look around and feel free to contact me if you have any questions or would like to collaborate on a project.</p>
            </div>
            <img src={Selfie} alt="Selfie" className="w-1/4" />
        </div>
        
    )
}