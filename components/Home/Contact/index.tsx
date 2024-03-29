import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useForm, ValidationError } from '@formspree/react';
import { LINK_EMAIL, LINK_LINKEDIN, STRING_CONTACT, STRING_CONTACT_DESCRIPTION, STRING_EMAIL_ADDRESS, STRING_FORM_NAME, STRING_FORM_PRAYER, STRING_FORM_SUBMIT, STRING_LINKEDIN_ADDRESS, STRING_ME, STRING_PRAYER_REQUEST, STRING_PRAYER_REQUEST_DESC, STRING_WAYS_TO } from "../../../locale";
import { useState, useEffect } from "react";
import AOS from 'aos';

const ThankYouComponent: React.FC = () => (
    <div className="flex flex-col space-y-4">
        <span className="text-xl font-bold">Mark 11:24 (NIV)</span>
        <p className="text-lg">Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.</p>
        <p className="text-2xl py-6">Thank you for submitting your request! Your request will be prayed soon and may God bless you always! ❤️</p>
    </div>
)

export default function Contact () {
    const [ state, handleSubmit ] = useForm("xnqkorjl");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
        AOS.refresh();
    }, []);
    
    return (
        <div
            id="contact"
            className="flex flex-col text-white space-y-10 lg:space-y-8 py-6 h-full md:h-screen place-content-center"
        >
            <div className="flex flex-col space-y-6">
                <div className="flex flex-row space-x-2 text-3xl lg:text-5xl" data-aos="slide-up">
                    <span className="font-light">{STRING_WAYS_TO}</span>
                    <span className="font-medium">{STRING_CONTACT.toLowerCase()}</span>
                    <span className="font-light">{STRING_ME}</span>
                </div>
                <div className="flex flex-row flex-wrap lg:space-x-20" data-aos="fade-up">
                    <div className="w-full lg:w-1/2">
                        <span className="text-lg lg:text-xl font-extralight">{STRING_CONTACT_DESCRIPTION}</span>
                    </div> 
                    <div className="flex flex-col space-y-2 py-2 lg:py-0 lg:px-4 text-lg lg:text-xl">
                        <a
                            className="p-1 hover:text-black dark:hover:text-light-blue-sapphire"
                            href={LINK_EMAIL}
                            target="blank"
                        >
                            <div className="flex flex-row space-x-4 items-center">
                                <GrMail />
                                <span className="font-light">{STRING_EMAIL_ADDRESS}</span>
                            </div>
                        </a>
                        <a
                            className="p-1 hover:text-black dark:hover:text-light-blue-sapphire"
                            href={LINK_LINKEDIN}
                            target="blank"
                        >
                            <div className="flex flex-row space-x-4 items-center">
                                <FaLinkedin />
                                <span className="font-light">{STRING_LINKEDIN_ADDRESS}</span>
                            </div>
                        </a>
                    </div>
                </div>    
            </div>
            <form onSubmit={handleSubmit}>
                {  
                    state.succeeded ?
                    <ThankYouComponent /> :
                    <>
                        <div className="flex flex-col space-y-6 w-full lg:w-1/2" data-aos="fade-up">
                            <span className="text-2xl lg:text-3xl font-medium">{STRING_PRAYER_REQUEST}</span>
                            <span className="text-lg font-light">{STRING_PRAYER_REQUEST_DESC}</span>
                        </div>
                        <div className="flex flex-col space-y-6 w-full lg:w-1/2 py-4" data-aos="fade-up">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">
                                    <span className="text-xl">{STRING_FORM_NAME}</span>
                                </label>
                                <input
                                    id="name"
                                    type="name"
                                    name="name"
                                    className="p-2 rounded-lg border hover:border-light-blue-sapphire dark:text-white"
                                    placeholder="Your name here"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className="text-xl">{STRING_FORM_PRAYER}</span>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="p-2 rounded-lg border hover:border-light-blue-sapphire dark:text-white"
                                    placeholder="Put your requests here!"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-1/3 border bg-blue-sapphire dark:bg-white text-white dark:text-blue-sapphire hover:bg-white 
                                dark:hover:bg-light-blue-sapphire hover:text-blue-sapphire dark:hover:text-white hover:border-blue-sapphire 
                                dark:hover:border-white font-bold py-2 px-6 rounded-xl"
                            >
                                {STRING_FORM_SUBMIT}
                            </button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}