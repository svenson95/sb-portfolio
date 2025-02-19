interface TableItem {
  from: Date;
  to: Date | null;
  profession: string;
  company: string;
}

export const CV_DATA: TableItem[] = [
  {
    from: new Date('2022/08/15'),
    to: new Date('2023/10/15'),
    profession: 'web-developer',
    company: 'Yolawo GmbH'
  },
  {
    from: new Date('2021/09/15'),
    to: new Date('2022/02/15'),
    profession: 'part-time-job-web-dev',
    company: 'Kominal UG'
  },
  {
    from: new Date('2019/09/15'),
    to: new Date('2022/03/15'),
    profession: 'apprenticeship-it-app-dev',
    company: 'Piobyte GmbH'
  },
  {
    from: new Date('2019/03/15'),
    to: new Date('2019/09/15'),
    profession: 'internship-web-app-dev',
    company: 'Piobyte GmbH'
  },
  {
    from: new Date('2018/06/15'),
    to: new Date('2018/10/15'),
    profession: 'production-assistant',
    company: 'Wunderpen GmbH'
  },
  {
    from: new Date('2017/10/15'),
    to: new Date('2017/12/15'),
    profession: 'apprenticeship-tiler',
    company: 'Ulf Martischewski Fliesen, Naturstein, Spanndecken'
  },
  {
    from: new Date('2016/09/15'),
    to: new Date('2017/07/15'),
    profession: 'apprenticeship-tiler',
    company: 'WH Werkhaus Berlin'
  },
  {
    from: new Date('2015/10/15'),
    to: new Date('2016/07/15'),
    profession: 'apprenticeship-tiler',
    company: 'BfW Lehrbauhof Berlin'
  },
  {
    from: new Date('2014/12/15'),
    to: new Date('2015/01/15'),
    profession: 'apprenticeship-it-management-assistant',
    company: 'ACDM (MAIL BOX - Zentrale)'
  },
  {
    from: new Date('2013/08/15'),
    to: new Date('2014/12/15'),
    profession: 'apprenticeship-warehouse-logistics-assistant',
    company: 'MAIL BOX - Direct-Marketing Service GmbH'
  },
  {
    from: new Date('2013/05/15'),
    to: new Date('2013/08/15'),
    profession: 'part-time-warehouse-logistics-assistant',
    company: 'MAIL BOX - Direct-Marketing Service GmbH'
  },
  {
    from: new Date('2013/04/15'),
    to: new Date('2013/05/15'),
    profession: 'internship-warehouse-logistics-assistant',
    company: 'Party Rent Franchise GmbH'
  },
  {
    from: new Date('2013/01/15'),
    to: new Date('2013/04/15'),
    profession: 'internship-sport-and-fitness-management-assistant',
    company: 'EasyFitness Prenzlauer Berg'
  },
  {
    from: new Date('2012/01/15'),
    to: null,
    profession: 'school-internship-repair-service',
    company: 'Phonedoctor Berlin'
  }
];
