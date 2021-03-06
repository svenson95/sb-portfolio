import { Component } from '@angular/core';

@Component({
  selector: 'section#cv',
  templateUrl: './cv.component.html'
})
export class CvComponent {
  public school = [
    {
      dateRange: '07.2010 - 10.2012',
      value: 'Evangelische Schule Charlottenburg'
    },
    {
      dateRange: '07.2008 - 06.2010',
      value: 'Gottfried Kinkel Realschule'
    },
    {
      dateRange: '07.2002 - 06.2008',
      value: 'Christian Morgenstern Grundschule'
    }
  ];

  public work = [
    {
      dateRange: '21.09.2021 - 21.02.2022',
      value: 'Nebenbeschäftigung als Webentwickler <br /> <small>Kominal UG</small>'
    },
    {
      dateRange: '01.09.2019 - 23.03.2022',
      value: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung <br /> <small>Piobyte GmbH</small>'
    },
    {
      dateRange: '01.03.2019 - 01.09.2019',
      value: 'EQJ zum Fachinformatiker für Anwendungsentwicklung <br /> <small>Piobyte GmbH</small>'
    },
    {
      dateRange: '18.06.2018 - 08.10.2018',
      value: 'Produktionshelfer Handschriftautomation <br /> <small>Wunderpen GmbH</small>'
    },
    {
      dateRange: '16.10.2017 - 31.12.2017',
      value:
        'Ausbildung zum Fliesen-, Platten- und Mosaikleger <br /> <small>Ulf Martischewski Fliesen, Naturstein, Spanndecken</small>'
    },
    {
      dateRange: '01.09.2016 - 20.07.2017',
      value: 'Ausbildung zum Fliesen-, Platten- und Mosaikleger <br /> <small>WH Werkhaus Berlin</small>'
    },
    {
      dateRange: '01.10.2015 - 06.07.2016',
      value: 'Ausbildung zum Fliesen-, Platten- und Mosaikleger <br /> <small>BfW Lehrbauhof Berlin</small>'
    },
    {
      dateRange: '12.12.2014 - 18.01.2015',
      value: 'Ausbildung zum Informatikkaufmann <br /> <small>ACDM (MAIL BOX - Zentrale)</small>'
    },
    {
      dateRange: '01.08.2013 - 12.12.2014',
      value: 'Ausbildung zur Fachkraft für Lagerlogistik <br /> <small>MAIL BOX - Direct-Marketing Service GmbH</small>'
    },
    {
      dateRange: '10.05.2013 - 01.08.2013',
      value: 'Lagerhelfer in Teilzeit <br /> <small>MAIL BOX - Direct-Marketing Service GmbH</small>'
    },
    {
      dateRange: '29.04.2013 - 10.05.2013',
      value: 'Praktikum als Fachkraft für Lagerlogistik <br /> <small>Party Rent Franchise GmbH</small>'
    },
    {
      dateRange: '02.01.2013 - 22.04.2013',
      value: 'EQJ zum Sport- und Fitnesskaufmann <br /> <small>EasyFitness Prenzlauer Berg</small>'
    },
    {
      dateRange: '09.01.2012 - 27.01.2012',
      value: 'Schulpraktikum beim Reparaturservice <br /> <small>Phonedoctor Berlin</small>'
    }
  ];
}
