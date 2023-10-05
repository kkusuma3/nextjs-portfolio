export interface Project {
    id: number,
    title: string,
    animationSrc: object,
    github: string,
    link: string,
    languages: Array<{
        id: number,
        name: string,
        icon: React.ReactNode
    }>,
    description: string
}