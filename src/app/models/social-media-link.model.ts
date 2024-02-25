export class SocialMediaLink {
  title: string;
  href: string;

  constructor(props: {
    title: string;
    href: string;
  }) {
    this.title = props.title;
    this.href = props.href;
  }

  get iconSelector() {
    switch (this.title) {
      case "linkedin": return "fa-brands fa-linkedin";
      case "github": return "fa-brands fa-github";
      case "mail": return "fa-solid fa-paper-plane";
      default: throw new Error("unknown socials icon selector title")
    }
  }
}
