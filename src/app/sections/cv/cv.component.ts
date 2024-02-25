import { Component } from '@angular/core';

const WORK_DATA = [
  {
    dateRange: '01.08.2022 - 31.10.2023',
    value: 'Webentwickler Vollzeit <br /> <small>Yolawo GmbH</small>'
  },
  {
    dateRange: '21.09.2021 - 21.02.2022',
    value: 'Webentwickler Teilzeit <br /> <small>Kominal UG</small>'
  },
  {
    dateRange: '01.09.2019 - 23.03.2022',
    value: 'Fachinformatiker für Anwendungsentwicklung Ausbildung <br /> <small>Piobyte GmbH</small>'
  },
  {
    dateRange: '01.03.2019 - 01.09.2019',
    value: 'EQJ | Webentwickler Einstiegsqualifizierungsjahr <br /> <small>Piobyte GmbH</small>'
  },
  {
    dateRange: '18.06.2018 - 08.10.2018',
    value: 'Handschriftautomation Produktionshelfer Vollzeit <br /> <small>Wunderpen GmbH</small>'
  },
  {
    dateRange: '16.10.2017 - 31.12.2017',
    value:
      'Fliesen-, Platten- und Mosaikleger Ausbildung <br /> <small>Ulf Martischewski Fliesen, Naturstein, Spanndecken</small>'
  },
  {
    dateRange: '01.09.2016 - 20.07.2017',
    value: 'Fliesen-, Platten- und Mosaikleger Ausbildung <br /> <small>WH Werkhaus Berlin</small>'
  },
  {
    dateRange: '01.10.2015 - 06.07.2016',
    value: 'Fliesen-, Platten- und Mosaikleger Ausbildung  <br /> <small>BfW Lehrbauhof Berlin</small>'
  },
  {
    dateRange: '12.12.2014 - 18.01.2015',
    value: 'Informatikkaufmann Ausbildung <br /> <small>ACDM (MAIL BOX - Zentrale)</small>'
  },
  {
    dateRange: '01.08.2013 - 12.12.2014',
    value: 'Fachkraft für Lagerlogistik Ausbildung <br /> <small>MAIL BOX - Direct-Marketing Service GmbH</small>'
  },
  {
    dateRange: '10.05.2013 - 01.08.2013',
    value: 'Lagerhelfer Teilzeit <br /> <small>MAIL BOX - Direct-Marketing Service GmbH</small>'
  },
  {
    dateRange: '29.04.2013 - 10.05.2013',
    value: 'Fachkraft für Lagerlogistik Vollzeit Praktikum <br /> <small>Party Rent Franchise GmbH</small>'
  },
  {
    dateRange: '02.01.2013 - 22.04.2013',
    value: 'EQJ | Sport- und Fitnesskaufmann Einstiegsqualifizierungsjahr <br /> <small>EasyFitness Prenzlauer Berg</small>'
  },
  {
    dateRange: '09.01.2012 - 27.01.2012',
    value: 'Smartphone-Reparaturservice Vollzeit Schulpraktikum <br /> <small>Phonedoctor Berlin</small>'
  }
]

@Component({
  selector: 'section#cv',
  templateUrl: './cv.component.html'
})
export class CvComponent {
  public readonly work = WORK_DATA;
}
