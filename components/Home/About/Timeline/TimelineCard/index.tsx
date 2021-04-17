import styles from './timeline_card.module.css';

const timelineCardContentList: Array<{
    id: number,
    image: {
        src: string,
        alt: string
    },
    title: string,
    location: string,
    description: string
}> = [
    {
        id: 1,
        image: {
            src: '/images/kevin_kusuma.jpg',
            alt: 'Picture of baby kevin kusuma'
        },
        title: 'A star was born',
        location: 'Jakarta, Indonesia',
        description: 'Lorem Ipsum'
    }
]

export default function TimelineCard () {
    return (
        <div className="flex flex-row space-x-3 bg-blue-sapphire text-white relative rounded-lg my-16">
            <div className="w-1/6">
                <img
                    src="/images/kevin_kusuma.jpg"
                    alt="Picture of baby kevin kusuma"
                    className={styles.cardPicture}
                />
            </div>
            <div className="flex flex-col space-y-3 py-4">
                <div className="flex flex-row space-x-4 items-end">
                    <span className="text-2xl">A star was born</span>
                    <span className="text-lg font-extralight">Jakarta, Indonesia</span>
                </div>
                <hr className="border border-white"/>
                <p className="text-md font-thin">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
            </div>
        </div>
    )
}