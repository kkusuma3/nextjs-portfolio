export interface Project {
    id: number,
    title: string,
    img: {
        src: string,
        alt: string
    },
    github: string,
    link: string,
    languages: Array<{
        id: number,
        name: string,
        icon: React.ReactNode
    }>,
    description: string
}