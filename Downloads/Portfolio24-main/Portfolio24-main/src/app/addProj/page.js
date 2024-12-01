"use client"
import React, { useState, useEffect } from 'react';
import { db, storage } from '../API/firebase.config';
import { collection } from '@firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { addDoc } from '@firebase/firestore';
import { useRouter } from 'next/navigation';
import { auth } from '../API/firebase.config';
import { IoIosArrowDown } from "react-icons/io";

const AddProj = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [image, setImage] = useState(null);
    const [accordionIndex, setAccordionIndex] = useState(-1);

    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                router.push('/Auth'); // Redirect to login page if user is not logged in
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const projectsRef = collection(db, 'projects');

            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);

            await addDoc(projectsRef, {
                title: title,
                description: description,
                link: link,
                repoLink: repoLink,
                imageUrl: imageUrl
            });

            setTitle('');
            setDescription('');
            setLink('');
            setRepoLink('');
            setImage('');
        } catch (error) {
            console.error('Error adding project: ', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleAccordionClick = (index) => {
        setAccordionIndex(index === accordionIndex ? -1 : index);
    };

    return (
        <div className='h-[90vh] mx-5 mt-5 flex flex-col'>
            <nav className='h-[10vh] flex justify-between'>
                <div> <img className="h-10 w-auto" src={"https://i.ibb.co/KbjCwGW/original-36051dd8be8d73ec9caea4721bb8d807-removebg-preview.png"} alt="Logo"/></div>
               <div  className='flex flex-col items-end'> <h1 className='text-4xl font-bold'>Welcome Sachin</h1>
                <p>Got something New?</p></div>
            </nav>
                <h2 className="text-2xl mb-4">Add New Elements</h2>
                <div className="space-y-4 w-full">
                    <Accordion title="Add Project" index={0} className="h-[10vh]" currentIndex={accordionIndex} onClick={handleAccordionClick}>
                        <form className="space-y-4 mt-0 flex flex-col gap-y-5 w-[90vw]" onSubmit={handleSubmit}>
                            <div className='mt-5'>
                            <label htmlFor="title" className="block text-gray-700 mb-2.5">Title:</label>
                                <input type="text" id="title" placeholder='Project Title Here' value={title} onChange={(e) => setTitle(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
                            </div>
                            <div>
                            <label htmlFor="description" className="block text-gray-700 mb-2.5">Description:</label>
                                <textarea id="description" placeholder='Project Description Here' value={description} onChange={(e) => setDescription(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required></textarea>
                            </div>
                            <div>
                                <label htmlFor="link" className="block text-gray-700">Link:</label>
                                <input type="text" placeholder='Project Link Here' id="link" value={link} onChange={(e) => setLink(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
                            </div>
                            <div>
                                <label htmlFor="repoLink" className="block text-gray-700">Repository Link:</label>
                                <input type="text" id="repoLink" placeholder='Project Repository Link Here' value={repoLink} onChange={(e) => setRepoLink(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-gray-700">Image:</label>
                                <input type="file" id="image"  onChange={handleImageChange} className="w-full border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" required />
                            </div>
                            <button type="submit" className="w-full bg-zinc-900 text-white rounded-md py-2 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Submit</button>
                        </form>
                    </Accordion>
                    <Accordion title="Experience" index={1} currentIndex={accordionIndex} onClick={handleAccordionClick}>
                        <ExperienceForm />
                    </Accordion>
                    <Accordion title="Tech Stack" index={2} currentIndex={accordionIndex} onClick={handleAccordionClick}>
                        <TechStackForm />
                    </Accordion>
                    <Accordion title="About Me" index={3} currentIndex={accordionIndex} onClick={handleAccordionClick}>
                        <AboutMeForm />
                    </Accordion>
                </div>
            
        </div>
    );
};

const Accordion = ({ title, index, currentIndex, onClick, children }) => {
    return (
        <div className='flex flex-col items-center justify-between w-full'>
            <button
                className="w-full py-2 flex items-center text-xl justify-between hover:bg-gray-100 border-b-[1px] focus:outline-none focus:ring-2 focus:ring-gray-100 focus:rounded-md min-h-[10vh] text-start focus:ring-offset-2"
                onClick={() => onClick(index)}
            >
                {title}
                <span className='mr-10 text-xl'><IoIosArrowDown/></span>
            </button>
            
           
            {currentIndex === index && children}
        </div>
    );
};

const ExperienceForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDuration, setJobDuration] = useState('');
    const [companyTitle, setCompanyTitle] = useState('');
    const [index, setIndex] = useState('');

    const handleexpSubmit = async (e) => {
        e.preventDefault();

        try {
            const experienceRef = collection(db, 'experiences');

            await addDoc(experienceRef, {
                jobTitle: jobTitle,
                jobDuration: jobDuration,
                companyTitle: companyTitle,
                index: index  // Include index in the submitted data
            });

            // Reset form fields after submission
            setJobTitle('');
            setJobDuration('');
            setCompanyTitle('');
            setIndex('');
        } catch (error) {
            console.error('Error adding experience: ', error);
        }
    };

    return (
        <form className='space-y-4 mt-5 flex flex-col gap-y-5 w-[90vw]' onSubmit={handleexpSubmit}>
            <div>
                <label htmlFor="jobTitle" className="block text-gray-700 mb-2.5">Title:</label>
                <input type="text" id="jobTitle" placeholder='Job Title Here' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
            </div>
            <div>
                <label htmlFor="jobDuration" className="block text-gray-700 mb-2.5">Job Duration:</label>
                <input type="text" id="jobDuration" placeholder='Job Duration Here' value={jobDuration} onChange={(e) => setJobDuration(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
            </div>
            <div>
                <label htmlFor="companyTitle" className="block text-gray-700 mb-2.5">Company Title:</label>
                <input type="text" id="companyTitle" placeholder='Company Title Here' value={companyTitle} onChange={(e) => setCompanyTitle(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
            </div>
            <div>
                <label htmlFor="index" className="block text-gray-700 mb-2.5">Index:</label>
                <input type="text" id="index" placeholder='Index Here' value={index} onChange={(e) => setIndex(e.target.value)} className="w-full input rounded-none focus:border-x-0 focus:border-t-0 focus:border-b-[1px] focus:border-b-zinc-900 border-b-[1px] focus:outline-none focus:ring-0 border-b-zinc-400" required />
            </div>
            <button type="submit" className="w-full bg-zinc-900 text-white rounded-md py-2 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Submit</button>
        </form>
    );
};


const TechStackForm = () => {
    // Implement your tech stack form here
};

const AboutMeForm = () => {
    // Implement your about me form here
};

export default AddProj;
