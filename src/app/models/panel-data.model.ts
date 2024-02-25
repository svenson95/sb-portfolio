export interface PanelDataLink {
  href?: string | null;
  src?: string;
  label: string;
}

export interface PanelData {
  title: string;
  description: string;
  content: string;
  links?: PanelDataLink[];
  images?: PanelDataLink[];
}