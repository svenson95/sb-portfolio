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
      case "linkedin": return "fa-linkedin";
      case "github": return "fa-github";
      default: throw new Error("unknown socials icon selector title")
    }
  }
}
