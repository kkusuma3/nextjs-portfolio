import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

const CLOUDINARY_CDN_URL = 'http://aawedding.mo.cloudinary.net/public/gallery'

export const images: CustomImage[] = [
  {
    src: `${CLOUDINARY_CDN_URL}/teton_chapel.jpg`,
    original: `${CLOUDINARY_CDN_URL}/teton_chapel.jpg`,
    width: 320,
    height: 174,
    tags: [
      { value: "Grand Teton", title: "Grand Teton" },
      { value: "Chapel", title: "Chapel" },
    ],
    caption: "Chapel of Transfiguration - Grand Teton National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/teton_mormonrow_bw.jpg`,
    original: `${CLOUDINARY_CDN_URL}/teton_mormonrow_bw.jpg`,
    width: 320,
    height: 212,
    tags: [
        { value: "Grand Teton", title: "Grand Teton" },
        { value: "Building", title: "Building" },
    ],
    caption: "Mormon Row B&W - Grand Teton National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/teton_mormonrow_colored.jpg`,
    original: `${CLOUDINARY_CDN_URL}/teton_mormonrow_colored.jpg`,
    width: 320,
    height: 212,
    tags: [
        { value: "Grand Teton", title: "Grand Teton" },
        { value: "Building", title: "Building" },
    ],
    caption: "Mormon Row Sunset - Grand Teton National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_bison_bw.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_bison_bw.jpg`,
    width: 320,
    height: 213,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Bison", title: "Bison" },
    ],
    caption: "Bison at Old Faithful Geyser B&W - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_bison_chilling.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_bison_chilling.jpg`,
    width: 320,
    height: 183,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Bison", title: "Bison" },
    ],
    caption: "A Herd of Bisons chilling at Lamar Valley - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_bison_greenfield.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_bison_greenfield.jpg`,
    width: 400,
    height: 280,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Bison", title: "Bison" },
    ],
    caption: "A bison chilling in green pastures - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_bison_olfaithful_colored.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_bison_olfaithful_colored.jpg`,
    width: 320,
    height: 190,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Bison", title: "Bison" },
    ],
    caption: "A bison by Old Faithful - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_bison_retro.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_bison_retro.jpg`,
    width: 320,
    height: 148,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Bison", title: "Bison" },
    ],
    caption: "A Bison by Old Faithful Colorized - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_grandprismatic.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_grandprismatic.jpg`,
    width: 320,
    height: 213,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Geyser", title: "Geyser" },
    ],
    caption: "Beautiful colors of Grand Prismatic Spring - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_mimi_split.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_mimi_split.jpg`,
    alt: "Big Ben - London",
    width: 500,
    height: 300,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "People", title: "People" },
    ],
    caption: "A beautiful girl with a beautiful view - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_sunset_edit.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_sunset_edit.jpg`,
    alt: "Red Zone - Paris",
    width: 320,
    height: 175,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "Sunset", title: "Sunset" },
        { value: "Landscape", title: "Landscape" },
    ],
    caption: "Sunset at Lamar Valley - Yellowstone National Park",
  },
  {
    src: `${CLOUDINARY_CDN_URL}/yellowstone_mimikevin_bw.jpg`,
    original: `${CLOUDINARY_CDN_URL}/yellowstone_mimikevin_bw.jpg`,
    alt: "Wood Glass",
    width: 350,
    height: 200,
    tags: [
        { value: "Yellowstone", title: "Yellowstone" },
        { value: "People", title: "People" },
        { value: "Couple", title: "Couple" },
    ],
    caption: "Couple holding hands BW - Yellowstone National Park",
  },
];
