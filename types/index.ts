export interface Project {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    imageHint?: string;
    liveLink?: string;
    repoLink?: string;
  }
  
  export interface Experience {
    id:string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
    logoUrl?: string;
    logoHint?: string;
  }
  