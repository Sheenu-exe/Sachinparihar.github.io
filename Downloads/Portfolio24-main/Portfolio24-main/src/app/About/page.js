const About = () => {
    return (
        <div id="about">
            <section className="relative sm:block hidden bg-cover bg-right-bottom bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/hWPgGjL/Me.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-white text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                           About Me
                        </h1>
                        <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                        I'm Sachin Parihar, a highly motivated and results-oriented aspiring Front-End Developer with a passion for building user-friendly and responsive web experiences. I am currently a 19-year-old BCA student at Manipal University Jaipur and I'm proficient in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Firebase. Through my internship experience, I spearheaded the development of a comprehensive web project, taking ownership of the frontend codebase and delivering seamless user experiences. I am eager to learn and contribute to a collaborative team environment.
                        </p>
                        
                    </div>
                </div>
            </section>
            <section className="relative sm:hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/58GpcYk/Whats-App-Image-2024-04-23-at-18-07-11-46dd6af7.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-white text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                           About Me
                        </h1>
                        <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
                        I'm Sachin Parihar, a highly motivated and results-oriented aspiring Full Stack Developer with a passion for building user-friendly and responsive web experiences. I am currently a 19-year-old BCA student at Manipal University Jaipur and I'm proficient in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Firebase. Through my internship experience, I spearheaded the development of a comprehensive web project, taking ownership of the frontend codebase and delivering seamless user experiences. I am eager to learn and contribute to a collaborative team environment.
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
