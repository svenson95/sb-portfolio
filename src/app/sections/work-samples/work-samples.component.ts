import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#work-samples',
  templateUrl: './work-samples.component.html'
})
export class WorkSamplesComponent {
  public options = viewerOptions;

  public projects = [
    {
      title: 'KryptoCrypto',
      description: 'Oktober 2021 - Dezember 2021',
      content:
        'Weiterentwicklung einer Webanwendung zur Darstellung von Informationen wie Transaktionen, Wertänderungen und zum Einrichten von Benachrichtigungen für Crypto Wallets sowie zur Analyse des CO² Austoßes eines Crypto Wallets.',
      images: [
        { src: 'assets/work-examples/kryptocrypto/kryptocrypto-1.png', alt: 'Image 1' },
        { src: 'assets/work-examples/kryptocrypto/kryptocrypto-2.png', alt: 'Image 2' },
        { src: 'assets/work-examples/kryptocrypto/kryptocrypto-3.png', alt: 'Image 3' },
        { src: 'assets/work-examples/kryptocrypto/kryptocrypto-4.png', alt: 'Image 4' }
      ]
    },
    {
      title: 'Cost-of-Production',
      description: 'April 2021 - November 2021',
      content:
        'Neuentwicklung einer Online-Plattform zur Erfassung von Produktionskosten in der Landwirtschaft - Farm-Statistiken, Fragebögen & Reports. Entsprechende Anwender (bspw. Bauernhöfe) können hier die bereits bestehenden Funktionen der Datenerfassung, -verarbeitung und -auswertung einsehen.',
      links: [{ href: 'assets/work-examples/cop/cop-1.png', label: 'GitHub' }]
    },
    {
      title: 'Pio Office Suite',
      description: 'August 2020 - September 2021',
      content:
        'Betriebsinterne VoIP App als PWA für Kontaktdaten aller Kunden, Mitarbeiter & Partner. Über die App war es möglich Anrufe über Durchwahlnummern zu initialisieren mithilfe einer zusätzlichen VoIP-App „easybell“. In dieser App konnten zudem Kunden- und Partner-Firmen eingesehen werden (Kontaktdaten des Unternehmens & entsprechende Mitarbeiter-Liste).',
      images: [{ src: 'assets/work-examples/pos/pos-1.png', alt: 'Image 1' }]
    },
    {
      title: 'VapeWatchers',
      description: 'Januar 2020 - Juni 2021',
      content:
        'Control-Panel für Nutzer von E-Zigaretten mit Informationen zu Inhaltsstoffen und Rauchverhalten - Nikotin Konsum pro Tag/Woche, verwendete Cartridges & Nutzungshistorie. Ebenso konnten verbundene Devices (E-Zigaretten) eingesehen werden. Zur Benutzer-Authentifizierung wurde AWS-Amplify genutzt.',
      images: [
        { src: 'assets/work-examples/smart-vaping/smart-vaping-1.png', alt: 'Image 1' },
        { src: 'assets/work-examples/smart-vaping/smart-vaping-2.png', alt: 'Image 2' },
        { src: 'assets/work-examples/smart-vaping/smart-vaping-3.png', alt: 'Image 3' }
      ]
    },
    {
      title: 'Lernetics',
      description: 'Oktober 2020 - Dezember 2020',
      content:
        'Neuentwicklung der nativen Cross-Plattform-Application (Tab-basiert) für eine Berufsschule. „Mit Lernletics kannst du dich im Rahmen deiner Ausbildung in verschiedenen Themenbereichen selbst trainieren.“. Quizze für verschiedene Themen und anschließende Auswertung. Fragen die nicht korrekt beantwortet wurden konnten im Nachhinein nochmal gezielt abgefragt werden.',
      images: [{ src: 'assets/work-examples/lernetics/lernetics-1.png', alt: 'Image 1' }]
    },
    {
      title: 'Survey-App',
      description: 'März 2019 - Dezember 2019',
      content:
        'Single-Page-Application für Kundenumfragen bezüglich der Nutzung des TK-GesundheitsCoachs (Ziele: Gesundheit, Nichtraucher oder Fitness). Je nachdem welches Ziel der Nutzer verfolgt & wie lange er schon beim Coaching dabei ist werden unterschiedliche Fragen angezeigt.',
      images: [
        { src: 'assets/work-examples/vilua-survey/vilua-survey-1.png', alt: 'Image 1' },
        { src: 'assets/work-examples/vilua-survey/vilua-survey-2.png', alt: 'Image 2' },
        { src: 'assets/work-examples/vilua-survey/vilua-survey-3.png', alt: 'Image 3' }
      ]
    }
  ];
}
