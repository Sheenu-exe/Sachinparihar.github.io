"use client"

import React, { useState, useEffect } from 'react';
import { db } from "../API/firebase.config"; 
import { collection } from '@firebase/firestore';
import { getDocs } from '@firebase/firestore';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsRef = collection(db, 'projects');
                const snapshot = await getDocs(projectsRef);
                const projectsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching projects: ', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div id='projects' className="min-h-[90vh] py-12 px-4 bg-gray-100">
            <h1 className="text-4xl font-semibold text-center mb-8">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className="h-60 w-full object-cover object-center" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex justify-between">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 font-semibold hover:text-purple-700">Link</a>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-purple-500 font-semibold hover:text-purple-700">Repo Link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
