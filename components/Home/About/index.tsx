import {
    STRING_WHO,
    STRING_I_AM,
    STRING_TIMELINE,
    STRING_PIC_GALLERY_TITLE,
    STRING_RESUME,
} from "../../../locale";
import AboutCard from './About';
import Timeline from './Timeline';
import PictureGallery from './PictureGallery';
import Resume from "./Resume";

export default function About() {
    return (
        <div
            id="about"
            className="flex flex-col"
        >
            <div className="flex flex-row space-x-2 text-5xl text-blue-sapphire">
                <span className="font-light">{STRING_WHO}</span>
                <span className="font-medium">{STRING_I_AM}</span>
            </div>
            <hr className="border-2 rounded-md border-blue-sapphire my-2 md:my-4 w-1/6 md:w-1/12"/>
            <AboutCard />
            {/* <span className="text-center font-light text-3xl text-blue-sapphire py-12">{STRING_TIMELINE}</span>
            <Timeline /> */}
            <span className="text-3xl text-blue-sapphire py-12">{STRING_PIC_GALLERY_TITLE}</span>
            <PictureGallery />
        </div>
    );
}
