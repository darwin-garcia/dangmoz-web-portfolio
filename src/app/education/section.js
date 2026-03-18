import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function EducationSection() {
    return (
    <section className=''>
        <ul>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0' >
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> March 2025 - September 2025</p>                        
                    </div>                   

                    <div className='space-y-3 xl:col-span-3'>
                        <div>
                            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                                <a className='text-gray-900 dark:text-gray-100'>Data Scientist</a>
                            </h3>
                            <div className='flex flex-wrap'>
                                <a className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'>IBM</a>
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <p>Data Science and AI School. The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!</p>
                        </div>

                        {/* Contenedor de imagen con efecto Blur y Grayscale */}
                        <div className="w-full object-cover opacity-60 cursor-pointer filter grayscale blur-[1.5px] hover:grayscale-0 hover:blur-none hover:opacity-100 transition-all duration-500 ease-in-out">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/JEI1DRMTQUEP" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="/images/degrees/IBM-DS-Degree.jpg" 
                                    alt="Degree-Image"
                                    width={640}
                                    height={480}
                                    className="w-full h-auto object-contain rounded-lg lg:max-w-[800px] lg:max-h-[600px] shadow-md hover:shadow-xl" 
                                /> 
                            </a>
                        </div>
                    </div>                  
                </div>
                
            </li>
            <div className='bg-[#ffffff80] h-[0.5px] w-[auto]  shadow-black'></div>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0' >
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> January 2022 - July 2022</p>                        
                    </div>                       

                    <div className='space-y-3 xl:col-span-3'>
                        <div>
                            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                                <a className='text-gray-900 dark:text-gray-100' >Frontend Developer</a>
                            </h3>
                            <div className='flex flex-wrap'>
                                <a className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'>Oracle Next Education</a>
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <p>Web Development Bootcamp. The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!</p>
                        </div>

                        {/* Contenedor de imagen con efecto Blur y Grayscale */}
                        <div className="w-full object-cover opacity-60 cursor-pointer filter grayscale blur-[1.5px] hover:grayscale-0 hover:blur-none hover:opacity-100 transition-all duration-500 ease-in-out">
                            <a href="https://app.aluracursos.com/degree/certificate/3c7a68f4-3018-4adc-a7be-05753451bbb4" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="/images/degrees/Oracle-Frontend-Degree.JPG" 
                                    alt="Degree-Image"
                                    width={640}
                                    height={480}
                                    className="w-full h-auto object-contain rounded-lg lg:max-w-[800px] lg:max-h-[600px] shadow-md hover:shadow-xl" 
                                /> 
                            </a>
                        </div>
                    </div>                  
                </div>
                
            </li>
            
        </ul>
    </section>
  )
}