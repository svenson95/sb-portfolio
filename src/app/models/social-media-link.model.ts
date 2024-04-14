import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export class SocialMediaLink {
  public title: string;
  public href: string;

  constructor(props: { title: string; href: string }) {
    this.title = props.title;
    this.href = props.href;
  }

  public get iconSelector(): IconDefinition {
    switch (this.title) {
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
      case 'mail':
        return faPaperPlane;
      default:
        throw new Error('unknown socials icon selector title');
    }
  }
}
