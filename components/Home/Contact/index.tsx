import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { LINK_EMAIL, LINK_LINKEDIN, STRING_CONTACT, STRING_CONTACT_DESCRIPTION, STRING_EMAIL_ADDRESS, STRING_FORM_NAME, STRING_FORM_PRAYER, STRING_FORM_SUBMIT, STRING_LINKEDIN_ADDRESS, STRING_ME, STRING_PRAYER_REQUEST, STRING_PRAYER_REQUEST_DESC, STRING_WAYS_TO } from "../../../locale";

const submitPrayer = input => {

}

export default function Contact () {
    return (
        <div
            id="contact"
            className="flex flex-col text-blue-sapphire space-y-10 lg:space-y-8 py-6"
        >
            <div className="flex flex-col space-y-6">
                <div className="flex flex-row space-x-2 text-3xl lg:text-5xl">
                    <span className="font-light">{STRING_WAYS_TO}</span>
                    <span className="font-medium">{STRING_CONTACT.toLowerCase()}</span>
                    <span className="font-light">{STRING_ME}</span>
                </div>
                <div className="flex flex-row flex-wrap lg:space-x-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-lg lg:text-xl font-extralight">{STRING_CONTACT_DESCRIPTION}</span>
                    </div> 
                    <div className="flex flex-col space-y-2 py-2 lg:py-0 lg:px-4 text-blue-sapphire text-lg lg:text-xl">
                        <a
                            className="p-1"
                            href={LINK_EMAIL}
                            target="blank"
                        >
                            <div className="flex flex-row space-x-4 items-center">
                                <GrMail />
                                <span className="font-light">{STRING_EMAIL_ADDRESS}</span>
                            </div>
                        </a>
                        <a
                            className="p-1"
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
            
            <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                <span className="text-2xl lg:text-3xl font-medium">{STRING_PRAYER_REQUEST}</span>
                <span className="text-lg font-light">{STRING_PRAYER_REQUEST_DESC}</span>
            </div>
            <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                <div className="flex flex-col space-y-2">
                    <span className="text-xl">{STRING_FORM_NAME}</span>
                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Your name here"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xl">{STRING_FORM_PRAYER}</span>
                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Put your requests here!"
                    />
                </div>
                <button
                    className="w-1/3 bg-blue-sapphire text-white font-bold py-2 px-6 rounded-xl"
                    onClick={submitPrayer}
                >
                    {STRING_FORM_SUBMIT}
                </button>
            </div>
        </div>
    )
}