import { ImageSource } from './image.model';

export interface PanelDataLink {
  href?: string | null;
  src?: ImageSource | null;
  label: string;
}

export interface PanelData {
  title: string;
  description: string;
  content: string;
  links?: PanelDataLink[] | null;
  images?: PanelDataLink[] | null;
}
