"use client"

import React, { useState, useEffect } from 'react';
import { db } from '../API/firebase.config';
import { collection, getDocs } from '@firebase/firestore';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experiencesRef = collection(db, 'experiences');
                const querySnapshot = await getDocs(experiencesRef);
                const fetchedExperiences = [];
                querySnapshot.forEach((doc) => {
                    fetchedExperiences.push({ id: doc.id, ...doc.data() });
                });
    
                // Sort experiences by the "index" property from highest to lowest
                fetchedExperiences.sort((a, b) => b.index - a.index);
    
                // Set the sorted experiences to state
                setExperiences(fetchedExperiences);
            } catch (error) {
                console.error('Error fetching or sorting experiences: ', error);
            }
        };
    
        fetchExperiences();
    }, []);
    
    
    
    
    return (
        <div id="experience" className="h-fit sm:mt-0 mt-5">
            <section className="bg-gray-100 text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-zinc-900">
                                <h3 className="text-3xl font-semibold">Experience</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                {experiences.map((experience) => (
                                    <div key={experience.id} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-zinc-900">
                                        <h3 className="text-xl font-semibold tracki">{experience.jobTitle}</h3>
                                        <time className="text-xs tracki uppercase text-gray-600">{experience.jobDuration}</time>
                                        <p className="mt-3">{experience.companyTitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
