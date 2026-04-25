export const orchestra = {
  name: "Junges Kammerorchester Tauberfranken",
  shortName: "JKO",
  tagline: "Junger Klang aus dem Herzen Tauberfrankens",
  founded: 2008,
  location: "Tauberfranken",
  description:
    "Das Junge Kammerorchester Tauberfranken vereint seit Jahren Musikerinnen und Musiker aus der Region — von engagierten Schülern über Studierende an renommierten Musikhochschulen bis hin zu erfahrenen Profis. Aus dieser Mischung aus jugendlicher Energie und professionellem Handwerk entsteht ein Klang, der weit über die Region hinaus für Aufsehen sorgt.",
  mission:
    "Wir sind überzeugt, dass klassische Musik jung, lebendig und nahbar ist. Unsere Konzerte sollen nicht nur gehört, sondern erlebt werden.",
};

export const images = {
  logo: "/images/logo.png",
  church: "/images/orchestra-church.jpg",
  courtyard: "/images/orchestra-courtyard.jpg",
  aerial: "/images/orchestra-aerial.jpg",
};

export type Concert = {
  id: string;
  date: string;
  dateLabel: string;
  time: string;
  title: string;
  program: string[];
  venue: string;
  city: string;
  status: "upcoming" | "sold-out" | "past";
  registrationOpen?: boolean;
};

export const concerts: Concert[] = [
  {
    id: "sommerkonzert-2026",
    date: "2026-06-27",
    dateLabel: "27. Juni 2026",
    time: "19:30",
    title: "Sommerkonzert — Mozart & Mendelssohn",
    program: [
      "W. A. Mozart — Eine kleine Nachtmusik, KV 525",
      "F. Mendelssohn — Streichersymphonie Nr. 10",
      "E. Grieg — Holberg-Suite, op. 40",
    ],
    venue: "Stiftskirche",
    city: "Bad Mergentheim",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "kirchenkonzert-2026",
    date: "2026-07-18",
    dateLabel: "18. Juli 2026",
    time: "20:00",
    title: "Kirchenkonzert — Barock & Romantik",
    program: [
      "A. Vivaldi — Die vier Jahreszeiten (Sommer)",
      "J. S. Bach — Air aus der Orchestersuite Nr. 3",
      "A. Dvořák — Serenade für Streicher, op. 22",
    ],
    venue: "Stadtkirche",
    city: "Tauberbischofsheim",
    status: "upcoming",
  },
  {
    id: "benefiz-2026",
    date: "2026-09-12",
    dateLabel: "12. September 2026",
    time: "19:00",
    title: "Benefizkonzert — Für den Nachwuchs",
    program: [
      "P. I. Tschaikowsky — Serenade für Streicher, op. 48",
      "A. Piazzolla — Las Cuatro Estaciones Porteñas",
    ],
    venue: "Kurhaus",
    city: "Bad Mergentheim",
    status: "upcoming",
  },
  {
    id: "weihnachten-2026",
    date: "2026-12-20",
    dateLabel: "20. Dezember 2026",
    time: "18:00",
    title: "Weihnachtskonzert",
    program: [
      "A. Corelli — Concerto grosso op. 6 Nr. 8 „Fatto per la notte di Natale“",
      "J. S. Bach — Weihnachtsoratorium (Auszüge)",
    ],
    venue: "Schlosskirche",
    city: "Weikersheim",
    status: "upcoming",
  },
];

export type ArchiveYear = {
  year: number;
  highlights: string[];
  concertCount: number;
};

export const archive: ArchiveYear[] = [
  {
    year: 2025,
    concertCount: 6,
    highlights: [
      "Jubiläumskonzert „15 Jahre JKO“",
      "Tournee durch Baden-Württemberg",
      "Zusammenarbeit mit Solistin Clara Weiss (Violine)",
    ],
  },
  {
    year: 2024,
    concertCount: 5,
    highlights: [
      "Sommerkonzert Stiftskirche Bad Mergentheim",
      "Benefizkonzert für das Kinderhospiz",
      "Festival-Auftritt Tauberfranken Klassik",
    ],
  },
  {
    year: 2023,
    concertCount: 4,
    highlights: [
      "Beethoven-Projekt: Sinfonie Nr. 7",
      "Schlosskonzert Weikersheim",
      "Weihnachtskonzert Stadtkirche",
    ],
  },
  {
    year: 2022,
    concertCount: 5,
    highlights: [
      "Bach-Zyklus: Brandenburgische Konzerte",
      "Premiere neuer Auftragskomposition von Elena Kats-Chernin",
    ],
  },
  {
    year: 2021,
    concertCount: 3,
    highlights: ["Streaming-Konzerte während der Pandemie", "Open-Air-Konzert Schlossgarten"],
  },
  { year: 2020, concertCount: 2, highlights: ["Neujahrskonzert", "Digitales Sommerformat"] },
  { year: 2019, concertCount: 6, highlights: ["Tschaikowsky Serenade", "Gastkonzert in Würzburg"] },
  { year: 2018, concertCount: 5, highlights: ["10-Jahres-Jubiläum", "Mendelssohn-Schwerpunkt"] },
];

export type Review = {
  publication: string;
  date: string;
  quote: string;
  author?: string;
};

export const reviews: Review[] = [
  {
    publication: "Fränkische Nachrichten",
    date: "2025-07",
    author: "M. Hartmann",
    quote:
      "Ein Abend, der zeigt, was möglich ist, wenn jugendliche Energie auf präzises Handwerk trifft — das JKO spielte Mendelssohn mit einer Strahlkraft, wie man sie in dieser Region lange nicht gehört hat.",
  },
  {
    publication: "Main-Tauber-Zeitung",
    date: "2024-09",
    author: "L. Brenner",
    quote:
      "Das Tempo, das Dirigent und Orchester hier anschlagen, ist atemberaubend — und doch bleibt jede Phrase atmend, gesanglich, lebendig.",
  },
  {
    publication: "SWR Kultur",
    date: "2024-06",
    quote:
      "Ein Klangkörper mit klarer Haltung: selbstbewusst, frisch, überraschend reif. Das Publikum dankt mit stehenden Ovationen.",
  },
  {
    publication: "Rhein-Neckar-Zeitung",
    date: "2023-12",
    author: "S. Winkler",
    quote:
      "Was dieses junge Ensemble aus Tauberfranken aus Corellis Weihnachtskonzert macht, ist schlicht zum Weinen schön.",
  },
];

export const members = {
  total: 34,
  sections: [
    { name: "Violine I", count: 8 },
    { name: "Violine II", count: 7 },
    { name: "Viola", count: 5 },
    { name: "Violoncello", count: 6 },
    { name: "Kontrabass", count: 2 },
    { name: "Holzbläser", count: 4 },
    { name: "Horn", count: 2 },
  ],
};

export const contact = {
  email: "kontakt@jko-tauberfranken.de",
  phone: "+49 (0) 9341 000 000",
  address: "Junges Kammerorchester Tauberfranken e.V.\nMusikschule Tauberfranken\n97941 Tauberbischofsheim",
  social: {
    instagram: "@jko_tauberfranken",
    youtube: "JKO Tauberfranken",
  },
};

export const themes = [
  {
    slug: "affiche",
    name: "Affiche",
    subtitle: "Poster · Script · Paper",
    description:
      "Konzertplakat als Webseite: kondensierte rote Display-Type trifft blaue Brush-Script, Papier-Grain, runde Foto-Stempel mit umlaufender Schrift.",
    palette: ["#F4EDDE", "#E23A2F", "#1F49B8"],
  },
  {
    slug: "opus",
    name: "Opus",
    subtitle: "Editorial × Farbe · Gestural · Sexy",
    description:
      "Magazin-Typografie auf Creme, mit gemalten Pinsel-Highlights in Gelb, Rot und Blau. Sophisticated, aber mit Puls.",
    palette: ["#F4EDDE", "#F7C800", "#E23A2F"],
  },
  {
    slug: "opus-grau",
    name: "Opus Grau",
    subtitle: "Opus auf neutralem Grau · Ruhiger",
    description:
      "Dieselbe Editorial-Haltung wie Opus, aber auf hellgrauem Papier. Die Pinsel-Akzente in Gelb, Rot und Blau wirken klarer, das Bild kühler und professioneller.",
    palette: ["#ECECEA", "#F7C800", "#1F49B8"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    subtitle: "Magazin · Serif · Kultiviert",
    description:
      "Inspiriert von Vogue und Deutsche Grammophon: große Serifen, ruhige Weißräume, fotografisch getragen.",
    palette: ["#F4EDDE", "#0B0B0D", "#6E2C2C"],
  },
  {
    slug: "noir",
    name: "Noir",
    subtitle: "Cinematic · Gold · Dramatisch",
    description:
      "Dunkel, spotlit, filmisch. Für den Auftritt eines Ensembles, das man ernst nehmen muss.",
    palette: ["#0A0A0B", "#D4A853", "#242426"],
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    subtitle: "Gestural · Farbe · Jung",
    description:
      "Spielt mit den Logofarben Gelb, Rot, Blau. Swiss-Grid mit Pinselstrich-Motiv. Unverschämt jung.",
    palette: ["#F7C800", "#E23A2F", "#1F49B8"],
  },
  {
    slug: "aurora",
    name: "Aurora",
    subtitle: "Glass · Gradient · Zeitlos",
    description:
      "Apple-esque. Weiche Gradients, Glas, große Rundungen. Klar, modern, zugänglich.",
    palette: ["#F7F7F9", "#6B5BFF", "#B79BFF"],
  },
] as const;

export type ThemeSlug = (typeof themes)[number]["slug"];

export const nav = [
  { href: "", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/termine", label: "Termine" },
  { href: "/mitglied", label: "Mitglied & Spenden" },
  { href: "/archiv", label: "Archiv" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
