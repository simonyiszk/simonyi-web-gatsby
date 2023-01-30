import type { ProfileType, GroupType, AboutType, ImageType } from '../types';

const about: AboutType = {
  title: 'A szakkoli',
  text: 'A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. A szakkollégium 2003-ban vette fel Simonyi Károly, a Kar rajongva tisztelt professzora nevét. A Simonyi Károly Szakkollégium célja, hogy elsősorban a szakkollégium tagjai, lehetőség szerint a Villamosmérnöki és Informatikai Kar minden hallgatója számára lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek elsajátítására. Ennek érdekében tanfolyamokat, bemutatókat, konferenciákat és más szakmai rendezvényeket szervez, lehetőségéhez mérten infrastruktúrával támogatja a hallgatók önálló szakmai munkáit. Ezenkívül a szakkollégium céljai közé tartozik, hogy a tagjai által elért eredményeket minél szélesebb körben publikálja, a magyar felsőoktatás más egységeivel és a szakemberekkel megismertesse a szakkollégiumban folyó munkát.'
};

const headlines: Array<string> = [
  'Szakmai<br>fejlődés',
  'Közösség.<br>Események.<br>Élmények.',
  'Szakmai napok.<br>Konferencia.<br>Nyári tábor.'
];

const images: Array<ImageType> = [
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' },
  { url: '', alt: '' }
];

const profiles: Array<ProfileType> = [
  {
    profilePictureUrl: '/default.png',
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      { socialIcon: 'email', url: 'mailto:user@example.com' },
      { socialIcon: 'facebook', url: 'https://facebook.com' },
      { socialIcon: 'instagram', url: 'https://instagram.com' },
      { socialIcon: 'linkedin', url: 'https://linkedin.com' },
      { socialIcon: 'phone', url: 'tel://+36000000000' },
      { socialIcon: 'youtube', url: 'https://youtube.com' },
      { socialIcon: 'website', url: 'https://example.com' }
    ]
  },
  {
    profilePictureUrl: '/default.png',
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      { socialIcon: 'email', url: 'mailto:user@example.com' },
      { socialIcon: 'facebook', url: 'https://facebook.com' },
      { socialIcon: 'instagram', url: 'https://instagram.com' },
      { socialIcon: 'linkedin', url: 'https://linkedin.com' },
      { socialIcon: 'phone', url: 'tel://+36000000000' },
      { socialIcon: 'youtube', url: 'https://youtube.com' },
      { socialIcon: 'website', url: 'https://example.com' }
    ]
  },
  {
    profilePictureUrl: '/default.png',
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      { socialIcon: 'email', url: 'mailto:user@example.com' },
      { socialIcon: 'facebook', url: 'https://facebook.com' },
      { socialIcon: 'instagram', url: 'https://instagram.com' },
      { socialIcon: 'linkedin', url: 'https://linkedin.com' },
      { socialIcon: 'phone', url: 'tel://+36000000000' },
      { socialIcon: 'youtube', url: 'https://youtube.com' },
      { socialIcon: 'website', url: 'https://example.com' }
    ]
  },
  {
    profilePictureUrl: '/default.png',
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      { socialIcon: 'email', url: 'mailto:user@example.com' },
      { socialIcon: 'facebook', url: 'https://facebook.com' },
      { socialIcon: 'instagram', url: 'https://instagram.com' },
      { socialIcon: 'linkedin', url: 'https://linkedin.com' },
      { socialIcon: 'phone', url: 'tel://+36000000000' },
      { socialIcon: 'youtube', url: 'https://youtube.com' },
      { socialIcon: 'website', url: 'https://example.com' }
    ]
  },
  {
    profilePictureUrl: '/default.png',
    name: 'Piller Trisztán',
    title: 'Elnök',
    socials: [
      { socialIcon: 'email', url: 'mailto:user@example.com' },
      { socialIcon: 'facebook', url: 'https://facebook.com' },
      { socialIcon: 'instagram', url: 'https://instagram.com' },
      { socialIcon: 'linkedin', url: 'https://linkedin.com' },
      { socialIcon: 'phone', url: 'tel://+36000000000' },
      { socialIcon: 'youtube', url: 'https://youtube.com' },
      { socialIcon: 'website', url: 'https://example.com' }
    ]
  }
];

const groups: Array<GroupType> = [
  {
    name: 'AC Studio & Live',
    logoUrl: '/AC.svg',
    description:
      'Az AC Studio & Live felel a kollégiumban tartott kisebb-nagyobb rendezvények hangosításáért és fénytechnikájáért, továbbá kezelik, üzemeltetik és karbantartják a kollégium rendezvénytechnikai eszközparkját. A kör gazdagon felszerelt hangstúdiója alkalmas kisebb zenekarok, együttesek többsávos felvételeinek elkészítésére is, amit rajtuk kívül kollégiumibandák és a Qpa csapatai is igénybe szoktak venni.',
    socials: [
      { socialIcon: 'website', url: 'https://acstudio.sch.bme.hu/' },
      { socialIcon: 'email', url: 'mailto:ac-info@simonyi.bme.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/acstudiolive/' }
    ]
  },
  {
    name: 'Budavári Schönherz Stúdió',
    logoUrl: '/BSS.svg',
    description:
      'A Budavári Schönherz Stúdiót legtöbben a hetente jelentkező élő online televízióadásairól és a rendezvények közvetítéséről, megörökítéséről ismerik. Ott voltak a Gólyatáborban, a Gólyahéten, a QPA-n, profi eszközeikkel pedig az év további részében is olyan tartalmat közvetítenek, amiért megéri online maradni csütörtök esténként: program- és filmajánlók, rendezvénybeszámolók, interjúk és élő felvételek zenekarokkal, tanárokkal vagy diákokkal és sok minden más. Az ezzel járó szerkesztési és technikai feladatokat is a kör tagjai végzik.',
    socials: [
      { socialIcon: 'website', url: 'https://bsstudio.hu/' },
      { socialIcon: 'email', url: 'mailto:bssinfo@sch.bme.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/bsstudio/' },
      { socialIcon: 'instagram', url: 'https://www.instagram.com/budavari_schonherz_studio/' },
      { socialIcon: 'youtube', url: 'https://youtube.com/bsstudi0/' }
    ]
  },
  {
    name: 'HA5KFU Rádióamatőr Klub',
    logoUrl: '/HA5KFU.svg',
    description:
      'A HA5KFU Rádióamatőr Klub nevét a hívójeléről kapta. 1954-es alakulásával a Villanykar legrégebbi köre, azóta foglalkoznak a rövidhullámú és URH rádióforgalmazással, műholdas kommunikációval és szoftverrádiós technológiákkal. A kollégium legtetején található műhelyükben pedig antennák és áramkörök épülnek, melyek az előbbi technológiákhoz szükségesek.',
    socials: [
      { socialIcon: 'website', url: 'https://ha5kfu.hu/' },
      { socialIcon: 'email', url: 'mailto:ha5kfu@simonyi.bme.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/ha5kfu/' },
      { socialIcon: 'instagram', url: 'https://www.instagram.com/ha5kfu/' }
    ]
  },
  {
    name: 'Kir-Dev',
    logoUrl: '/Kir-Dev.svg',
    description:
      'A Kir-Dev, vagyis a Kollégiumi Információs Rendszer Fejlesztők és Üzemeltetők 2001-ben alakult, és webfejlesztéssel, webes alkalmazások üzemeltetésével, oktatásával foglalkozik. Ők fejlesztik folyamatosan a PéK (Profil és Körök) alkalmazást, amely ma már több mint 30000 felhasználóval rendelkezik. Emellett a Qpa, G7 és SCHPincér weboldalakat is a kör tagjai készítették. A leggyakrabban használt technológiáik közé tartoznak a nyílt forráskódú Ruby on Rails, Node.js, React és Spring Boot keretrendszerek. A kör által készített összes alkalmazás nyílt forráskódú, megtekinthető GitHubon.',
    socials: [
      { socialIcon: 'website', url: 'https://kir-dev.hu/' },
      { socialIcon: 'email', url: 'mailto:kir-dev@sch.bme.hu' },
      { socialIcon: 'facebook', url: 'https://facebook.com/kirdevteam/' }
    ]
  },
  {
    name: 'LEGO Kör',
    logoUrl: '/LEGO.svg',
    description:
      'A LEGO Kör nevét a LEGO Mindstorms-ról kapta, ugyanis hosszú ideig ezen eszközök fejlesztése volt a fő profiljuk. Mára nem csak ezzel foglalkoznak, nyitottak a mesterséges intelligencia, az ipari irányítástechnika, az űrtechnológia és az alternatív irányításmódok felé is. Eszközparkjuk lehetőséget nyújt az innovatív ötletek megvalósításához. Náluk bárki megtalálhatja a számára megfelelő szakterületet.',
    socials: [
      { socialIcon: 'website', url: 'https://legokor.hu/' },
      { socialIcon: 'email', url: 'mailto:lego@sch.bme.hu' },
      { socialIcon: 'facebook', url: 'https://facebook.com/Legokor/' }
    ]
  },
  {
    name: 'Menedzsment Kör',
    logoUrl: '/MGMT.svg',
    description:
      'A MGMT a szakkolis rendezvények megszervezésével, a szakkoli társadalmi felelősségvállalásával foglalkozik. A tagok marketing-, PR-, HR és gazdaságis tapasztalatokra is szert tehetnek nálunk. Főbb rendezvényeink a Félévnyitó & Felvételi Vacsorák, a Szakmai Hét, a Simonyi Nyári Tábor, illetve a Simonyi Szülinap, ahová az ország szakkollégiumaiból érkeznek vendégek. A körben kapott menedzsment készségekkel és tapasztalatokkal felruházott szakkollégista az itt megszerzett tudást nemcsak az egyetemi pályafutása során, hanem annak befejezése után is számos területen tudja kamatoztatni.',
    socials: [{ socialIcon: 'email', url: 'mailto:mgmt@simonyi.bme.hu' }]
  },
  {
    name: 'schdesign',
    logoUrl: '/schdesign.svg',
    description:
      'A Simonyi Károly Szakkollégium kreatív alkotóműhelyeként a kör feladata a különböző digitális műfajok ápolása, mint például az arculattervezés, a logótervezés, a webdesign, a UX design, a 3D modellezés vagy a nyomtatott grafikák készítése. Mindezt valós projekteken teszik – egyik legnagyobb munkájuk az évről évre megrendezésre kerülő Simonyi Konferencia és a Schönherz QPA arculatának megtervezése.',
    socials: [
      { socialIcon: 'website', url: 'https://schdesign.hu/' },
      { socialIcon: 'email', url: 'mailto:hello@schdesign.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/schdesignbme/' },
      { socialIcon: 'instagram', url: 'https://www.instagram.com/schdesign.hu/' }
    ]
  },
  {
    name: 'Schönherz Elektronikai Műhely',
    logoUrl: '/SEM.svg',
    description:
      'A Schönherz Elektronikai Műhely a kollégium gyakorlatias villanyos és informatikus szakembereit fogja össze. A munkák elvégzésére egy felszerelt műhely áll a hallgatók rendelkezésre: a villamos fejlesztésekhez oszcilloszkóp, labortápegységek, forrasztási felszerelés és barkácsoláshoz szükséges alapanyagok, barkácsgépek. Jól felszerelt műhelyünkben ötleteidnek csak a kitartásod szabhat határt!',
    socials: [
      { socialIcon: 'website', url: 'https://sem.sch.bme.hu/' },
      { socialIcon: 'email', url: 'mailto:sem@sch.bme.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/SchonherzElektronikaiMuhely/' }
    ]
  },
  {
    name: 'SPOT',
    logoUrl: '/SPOT.svg',
    description:
      'A kör tagjai minden villanykari eseményen részt vesznek, és fényképek formájában dokumentálják azokat. Emellett sokat fotóznak a Schönherz Kollégium 1419-es klubszobájában található műtermükben is, számos villanykaros önéletrajzában szerepelnek itt készült fotók. Archívumukban hosszú évekre visszamenőleg megtekinthető a villanykari közösség élete, csapatuk pedig folyamatosan fejlődik létszámban, és a belsős képzéseiknek köszönhetően szaktudásban is.',
    socials: [
      { socialIcon: 'website', url: 'https://spot.sch.bme.hu/' },
      { socialIcon: 'email', url: 'mailto:spot@simonyi.bme.hu' },
      { socialIcon: 'facebook', url: 'https://www.facebook.com/bmespot/' },
      { socialIcon: 'instagram', url: 'https://www.instagram.com/bmespot/' }
    ]
  }
];

export { about, headlines, images, profiles, groups };
