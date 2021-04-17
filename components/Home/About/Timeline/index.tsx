import Image from 'next/image';
import TimelineCard from './TimelineCard';

const timelineList: Array<{
    id: number,
    year: string
}> = [
    {
        id: 1,
        year: '1998'
    },
    {
        id: 2,
        year: '2016'
    },
    {
        id: 3,
        year: '2018'
    },
    {
        id: 4,
        year: '2019'
    },
    {
        id: 5,
        year: 'TBD'
    }
]

export default function Timeline() {
    return (
        <div className="flex flex-row space-x-10">
            <ul className="flex flex-col w-1/4 justify-center">
                {
                    timelineList.map(time => {
                        return (
                            <>
                                <li key={time.id} className="flex flex-row space-x-4 items-center">
                                    <label>
                                        <Image
                                            src="/images/Timeline_circle.svg"
                                            width={15}
                                            height={15}
                                        />
                                    </label>
                                    <span className="text-lg text-blue-sapphire">{time.year}</span>
                                </li>
                                {
                                    time.id !== timelineList.length && 
                                        <Image
                                            src="/images/Timeline_vertical_line.svg"
                                            width={1}
                                            height={50}
                                        />
                                }
                            </>
                        )
                    })
                }
            </ul>
            <TimelineCard />
        </div>
    )
}