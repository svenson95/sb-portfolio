import { ImageUrl } from './image.model';

export interface PanelDataLink {
  href?: string | null;
  src?: ImageUrl | null;
  label: string;
}

export interface PanelData {
  title: string;
  description: string;
  content: string;
  links?: PanelDataLink[] | null;
  images?: PanelDataLink[] | null;
}
