import fs from 'fs';
import path from 'path';

export interface ServiceData {
    title: string;
    seoTitle?: string;
    image: string;
    description: string;
    content: string;
}

const servicesDirectory = path.join(process.cwd(), 'data/services');

export function getServicesData(): Record<string, ServiceData> {
    const fileNames = fs.readdirSync(servicesDirectory);
    const services: Record<string, ServiceData> = {};

    fileNames.forEach((fileName) => {
        const slug = fileName.replace(/\.json$/, '');
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const serviceData = JSON.parse(fileContents);
        services[slug] = serviceData;
    });

    return services;
}

// Keeping a simple export for backward compatibility if needed, but components should call getServicesData()
// Since we can't easily sync-read in client components, we should use server components predominantly.
// For now, we'll export getServicesData which runs on the server.
export const servicesData = getServicesData();
