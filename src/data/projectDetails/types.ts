export interface ProjectDetail {
    slug: string;
    title: string;
    heroImage: string;
    description: string;
    links: {
        demo: string;
        asset: string;
        github: string;
    };
}
