export interface Project {
  id: number;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  desc: string;
  ctaText: string;
  ctaUrl: string;
  bgColor?: string;
  image?: string;
  images?: string[];
}

export interface Projects {
  marketing: Project[];
  design: Project[];
  eng: Project[];
}
