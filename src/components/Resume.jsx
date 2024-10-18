'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useIsMobile from '@/cutoms-hooks/useIsMobile';
import '../app/styles.css';

const Resume = () => {
    const [showResume, setShowResume] = useState(false);
    const isMobile = useIsMobile();

    const handleToggleResume = () => {
        setShowResume(!showResume);
    };

    return (
        <Card className="w-4/5 my-2 rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-green-700" id="Resume">
            <CardHeader className="flex items-center justify-between">
                {isMobile ? (
                    // On mobile, render a link
                    <a
                        href="https://docs.google.com/document/d/e/2PACX-1vTENRoaiiMYmZfpsAaV9PqG-6xzxwFg3aIOTiIe3DVl481Zo4BcFUPazD6TO8MlZw/pub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-button relative flex items-center px-8 py-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold text-2xl cursor-pointer overflow-hidden transition-colors duration-300 ease-in-out hover:text-[#000000] active:border-[#888888]"
                    >
                        <p className="z-10">View Resume</p>
                    </a>
                ) : (
                    // On larger screens, render the toggle button
                    <button
                        className="fancy-button"
                        onClick={handleToggleResume}
                    >
                        <p className="z-10">{showResume ? 'Hide Resume' : 'Show Resume'}</p>
                    </button>
                )}
            </CardHeader>
            {!isMobile && showResume && (
                <CardContent className="p-0">
                    <div className="w-full h-[80vh] md:h-[90vh]">
                        <iframe
                            src="https://docs.google.com/document/d/e/2PACX-1vTENRoaiiMYmZfpsAaV9PqG-6xzxwFg3aIOTiIe3DVl481Zo4BcFUPazD6TO8MlZw/pub?embedded=true"
                            className="w-full h-full border-none"
                            title="My Resume"
                        ></iframe>
                    </div>
                </CardContent>
            )}
        </Card>
    );
};

export default Resume;
