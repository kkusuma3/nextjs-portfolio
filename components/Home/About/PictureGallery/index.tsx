import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function PictureGallery() {
    return (
        <div className="flex flex-col space-y-1">
            <hr className="border border-blue-sapphire" />
            <Gallery photos={photos} />
            <hr className="border border-blue-sapphire" />
        </div>
    );
}
