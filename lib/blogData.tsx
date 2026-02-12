import fs from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    comments: number;
    image?: string;
    video?: string;
    images?: string[];
}

const blogDirectory = path.join(process.cwd(), 'data/blog');

export function getBlogPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.json$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const blogPost: Omit<BlogPost, 'slug'> = JSON.parse(fileContents);

        return {
            slug,
            ...blogPost,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const blogPosts = getBlogPosts();
