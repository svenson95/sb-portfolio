interface TableItem {
  from: Date;
  to: Date | null;
  profession: string;
  company: string;
}

export const CV_DATA: TableItem[] = [
  {
    from: new Date('2022/08'),
    to: new Date('2023/10'),
    profession: 'web-developer',
    company: 'Yolawo GmbH'
  },
  {
    from: new Date('2021/09'),
    to: new Date('2022/02'),
    profession: 'part-time-job-web-dev',
    company: 'Kominal UG'
  },
  {
    from: new Date('2019/09'),
    to: new Date('2022/03'),
    profession: 'apprenticeship-it-app-dev',
    company: 'Piobyte GmbH'
  },
  {
    from: new Date('2019/03'),
    to: new Date('2019/09'),
    profession: 'internship-web-app-dev',
    company: 'Piobyte GmbH'
  },
  {
    from: new Date('2018/06'),
    to: new Date('2018/10'),
    profession: 'production-assistant',
    company: 'Wunderpen GmbH'
  },
  {
    from: new Date('2017/10'),
    to: new Date('2017/12'),
    profession: 'apprenticeship-tiler',
    company: 'Ulf Martischewski Fliesen, Naturstein, Spanndecken'
  },
  {
    from: new Date('2016/09'),
    to: new Date('2017/07'),
    profession: 'apprenticeship-tiler',
    company: 'WH Werkhaus Berlin'
  },
  {
    from: new Date('2015/10'),
    to: new Date('2016/07'),
    profession: 'apprenticeship-tiler',
    company: 'BfW Lehrbauhof Berlin'
  },
  {
    from: new Date('2014/12'),
    to: new Date('2015/01'),
    profession: 'apprenticeship-it-management-assistant',
    company: 'ACDM (MAIL BOX - Zentrale)'
  },
  {
    from: new Date('2013/08'),
    to: new Date('2014/12'),
    profession: 'apprenticeship-warehouse-logistics-assistant',
    company: 'MAIL BOX - Direct-Marketing Service GmbH'
  },
  {
    from: new Date('2013/05'),
    to: new Date('2013/08'),
    profession: 'part-time-warehouse-logistics-assistant',
    company: 'MAIL BOX - Direct-Marketing Service GmbH'
  },
  {
    from: new Date('2013/04'),
    to: new Date('2013/05'),
    profession: 'internship-warehouse-logistics-assistant',
    company: 'Party Rent Franchise GmbH'
  },
  {
    from: new Date('2013/01'),
    to: new Date('2013/04'),
    profession: 'internship-sport-and-fitness-management-assistant',
    company: 'EasyFitness Prenzlauer Berg'
  },
  {
    from: new Date('2012/01'),
    to: null,
    profession: 'school-internship-repair-service',
    company: 'Phonedoctor Berlin'
  }
];
