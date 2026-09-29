export type Accent = {
  key: string;
  label: string;
  accent: string;
  accentSoft: string;
  surface: string;
  onAccent: string;
};

export const accents: Record<string, Accent> = {
  home: {
    key: "home",
    label: "Home",
    accent: "#C4622D",
    accentSoft: "#D9B98B",
    surface: "#FAF6EF",
    onAccent: "#FFFFFF",
  },
  science: {
    key: "science",
    label: "Science & Medicine",
    accent: "#0B7C7C",
    accentSoft: "#9FDCDC",
    surface: "#F4F8F7",
    onAccent: "#FFFFFF",
  },
  fiction: {
    key: "fiction",
    label: "Fiction",
    accent: "#1B1F4B",
    accentSoft: "#F2A93B",
    surface: "#F3F1EC",
    onAccent: "#FFFFFF",
  },
  translation: {
    key: "translation",
    label: "Translation",
    accent: "#C9402F",
    accentSoft: "#F4A3A0",
    surface: "#FBF4F1",
    onAccent: "#FFFFFF",
  },
  essays: {
    key: "essays",
    label: "Essays & Press",
    accent: "#8A6206",
    accentSoft: "#A9BD8A",
    surface: "#FAF7EC",
    onAccent: "#FFFFFF",
  },
  about: {
    key: "about",
    label: "About",
    accent: "#24382E",
    accentSoft: "#A9BD8A",
    surface: "#F6F5EF",
    onAccent: "#FFFFFF",
  },
  contact: {
    key: "contact",
    label: "Contact",
    accent: "#A0522D",
    accentSoft: "#D9B98B",
    surface: "#FAF6EF",
    onAccent: "#FFFFFF",
  },
};

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  publisher: string;
  hook: string;
  synopsis: string;
  category: "science" | "fiction" | "translation";
  coverFrom: string;
  coverTo: string;
  meta?: string;
  note?: string;
  credit?: string;
};

export const scienceBooks: Book[] = [
  {
    slug: "the-scientific-100",
    title: "The Scientific 100",
    subtitle: "A Ranking of the Most Influential Scientists, Past and Present",
    year: "1996",
    publisher: "Carol / Citadel",
    note:
      "[Confirm publisher: the current site credits both Citadel and Carol (1996) for this title.]",
    hook:
      "One hundred lives, ranked and argued — a portrait of how scientific influence actually accumulates.",
    synopsis:
      "A collective biography of the hundred scientists whose work most shaped the world we live in, written for general and professional readers alike. [Replace with John's preferred description.]",
    category: "science",
    coverFrom: "#0FA3A3",
    coverTo: "#0B4A57",
    meta: "Collective biography · 504 pages",
  },
  {
    slug: "doctors-and-discoveries",
    title: "Doctors and Discoveries",
    subtitle: "Lives That Created Today's Medicine",
    year: "2002",
    publisher: "Houghton Mifflin",
    hook:
      "The physicians and researchers behind modern medicine — and the discoveries that carry their names.",
    synopsis:
      "A history of medicine told through the people who made it: the clinicians, anatomists and researchers whose findings became the everyday practice of care. [Replace with John's preferred description.]",
    category: "science",
    coverFrom: "#6B7A3A",
    coverTo: "#24382E",
    meta: "History of medicine",
  },
  {
    slug: "tpa-for-stroke",
    title: "tPA for Stroke",
    subtitle: "The Story of a Controversial Drug",
    year: "2011",
    publisher: "Oxford University Press",
    credit: "In collaboration with Justin A. Zivin, MD, PhD",
    hook:
      "How one clot-dissolving drug divided a profession — and changed the treatment of stroke.",
    synopsis:
      "Written with neurologist Justin A. Zivin, an account of the science, the trials and the long controversy surrounding tissue plasminogen activator. [Replace with John's preferred description.]",
    category: "science",
    coverFrom: "#C4622D",
    coverTo: "#7A2D12",
    meta: "Medicine · Drug development",
  },
];

export const fictionBooks: Book[] = [
  {
    slug: "lamplighter",
    title: "Lamplighter",
    year: "[year]",
    publisher: "[publisher]",
    hook: "A light kept burning for someone who may never come back.",
    synopsis: "[Replace with synopsis — do not publish until approved by John.]",
    category: "fiction",
    coverFrom: "#F2A93B",
    coverTo: "#7A3E00",
    meta: "Noir quartet · I",
  },
  {
    slug: "cried-the-piper",
    title: "Cried the Piper",
    year: "[year]",
    publisher: "[publisher]",
    hook: "A tune that leads somewhere no one intended to go.",
    synopsis: "[Replace with synopsis — do not publish until approved by John.]",
    category: "fiction",
    coverFrom: "#5A4E8C",
    coverTo: "#1B1F4B",
    meta: "Noir quartet · II",
  },
  {
    slug: "the-sharing",
    title: "The Sharing",
    year: "1983",
    publisher: "Fawcett",
    hook:
      "A haunting in a small town — and a historian who cannot leave the past alone.",
    synopsis:
      "A psychotic girl and the apparition of a Civil War officer who vanished at Gettysburg bring tragedy to a local history professor. [Publisher's description — confirm wording with John.]",
    category: "fiction",
    coverFrom: "#8A2E2E",
    coverTo: "#2A1010",
    meta: "Noir quartet · III · 320 pages",
  },
  {
    slug: "midnight-walking",
    title: "Midnight Walking",
    year: "1986",
    publisher: "Fawcett",
    hook: "The city after hours, and the people who only exist there.",
    synopsis: "[Replace with synopsis — do not publish until approved by John.]",
    category: "fiction",
    coverFrom: "#1B1F4B",
    coverTo: "#070A1E",
    meta: "Noir quartet · IV",
  },
];

export const translations: Book[] = [
  {
    slug: "aline-and-valcour",
    title: "Aline and Valcour",
    subtitle: "or, the Philosophical Novel",
    year: "2019",
    publisher: "Contra Mundum Press · 3 volumes",
    credit:
      "Marquis de Sade · Translated by John Galbraith Simmons & Jocelyne Geneviève Barque",
    hook:
      "The first complete English translation of Sade's 1795 epistolary novel — nine hundred pages of picaresque adventure, satire and political argument.",
    synopsis:
      "Written in the Bastille and published in 1795, Aline and Valcour is not pornographic but character-driven and tightly structured — a novel of the Enlightenment that surveys law, colonialism, gender and the sciences. The translation was supported by a 2011 National Endowment for the Arts Translation Fellowship.",
    category: "translation",
    coverFrom: "#F26B5B",
    coverTo: "#7A1F2B",
    meta: "French → English · 3 vols.",
  },
  {
    slug: "outlaw",
    title: "Outlaw",
    subtitle: "Author Armed & Dangerous",
    year: "[year]",
    publisher: "Contra Mundum Press",
    credit:
      "Rédoine Faïd, with Jérôme Pierrat · Translated by John Galbraith Simmons & Jocelyne Geneviève Barque",
    hook:
      "The memoir of France's most cinematic career criminal, told in his own voice.",
    synopsis:
      "A first-person account by Rédoine Faïd, conducted as an extended interview with crime journalist Jérôme Pierrat. [Confirm edition and publication date.]",
    category: "translation",
    coverFrom: "#A0522D",
    coverTo: "#3A1A0C",
    meta: "French → English · Memoir",
  },
  {
    slug: "ten-little-anarchists",
    title: "Ten Little Anarchists",
    year: "[year]",
    publisher: "Autonomedia",
    credit:
      "Daniel de Roulet · Translated by John Galbraith Simmons & Jocelyne Geneviève Barque",
    hook:
      "A Swiss novelist's account of watchmakers, exile and the long afterlife of an idea.",
    synopsis: "[Replace with synopsis — confirm details with John.]",
    category: "translation",
    coverFrom: "#6B7A3A",
    coverTo: "#1E2A16",
    meta: "French → English · Novel",
  },
];

export const otherTranslationWork = [
  {
    title: "Return to Vietnam",
    meta: "1994 · first translation",
    note: "The book that began the translation work.",
  },
  {
    title: "International Dictionary of Psychoanalysis",
    meta: "2004 · 3 volumes · board of translators",
    note: "With Jocelyne Geneviève Barque.",
  },
  {
    title: "The Encyclopedia of the Age of War and Reconstruction",
    meta: "Reference · translation",
    note: "With Jocelyne Geneviève Barque.",
  },
];

export type Essay = {
  title: string;
  outlet: string;
  date: string;
  kind: "Scientific" | "Medical" | "Literary";
  blurb: string;
  url?: string;
};

export const essays: Essay[] = [
  {
    title:
      "A Tale of Literary and Financial Debauchery: On Joel Warner's “The Curse of the Marquis de Sade”",
    outlet: "Los Angeles Review of Books",
    date: "April 11, 2023",
    kind: "Literary",
    blurb:
      "A review of Joel Warner's account of a notorious scoundrel, a mythical manuscript, and a literary scandal.",
    url: "https://lareviewofbooks.org/contributor/john-galbraith-simmons/",
  },
  {
    title: "The Bigoted Roots of Epidemiology",
    outlet: "Los Angeles Review of Books",
    date: "September 9, 2021",
    kind: "Medical",
    blurb:
      "Reviewing “Maladies of Empire,” on how colonial medicine and slavery should inform present-day public health.",
    url: "https://lareviewofbooks.org/contributor/john-galbraith-simmons/",
  },
  {
    title: "Childhood: Sifting Facts from Fad-Driven Fancy",
    outlet: "Los Angeles Review of Books",
    date: "November 8, 2020",
    kind: "Scientific",
    blurb:
      "On “The Origins of You”: how much parents matter, and how genetics is revising old theories of development.",
    url: "https://lareviewofbooks.org/contributor/john-galbraith-simmons/",
  },
  {
    title: "Sade, Too: A New Moment for a Complex Monster",
    outlet: "Los Angeles Review of Books",
    date: "April 1, 2020",
    kind: "Literary",
    blurb:
      "A newly translated work by the Marquis de Sade has much to say about power-mad, wealth-saturated times.",
    url: "https://lareviewofbooks.org/contributor/john-galbraith-simmons/",
  },
  {
    title: "Lindau Nobel Laureate Meeting report",
    outlet: "Nature",
    date: "2010",
    kind: "Scientific",
    blurb:
      "Reporting from Lindau. [Citation on the current site is incomplete — confirm exact title, issue and DOI before publishing.]",
  },
  {
    title: "Articles for the New York Academy of Sciences",
    outlet: "New York Academy of Sciences",
    date: "Various",
    kind: "Scientific",
    blurb:
      "Feature articles and reports produced for the Academy. [Add specific titles and links.]",
  },
  {
    title: "Reporting on new developments in cancer research",
    outlet: "Various outlets",
    date: "Various",
    kind: "Medical",
    blurb:
      "Long-running coverage of oncology research for professional and general readers. [Add specific titles and links.]",
  },
  {
    title: "Profiles and entries for Current Biography",
    outlet: "Current Biography",
    date: "Many years",
    kind: "Literary",
    blurb:
      "A long association with the magazine, writing biographical profiles. [Add selected entries.]",
  },
];

export const credibility = [
  "Oxford University Press",
  "Houghton Mifflin",
  "Nature",
  "New York Academy of Sciences",
  "Current Biography",
  "Contra Mundum Press",
  "Los Angeles Review of Books",
  "National Endowment for the Arts",
];

export const timeline = [
  { year: "Chicago", title: "Born", body: "Born in Chicago." },
  {
    year: "Northwestern",
    title: "Philosophy",
    body: "Graduated Northwestern University, where he studied philosophy.",
  },
  {
    year: "Long Island University",
    title: "Master's degree",
    body: "Master's degree in developmental studies.",
  },
  {
    year: "Post-graduate",
    title: "Psychoanalysis",
    body: "Post-graduate studies in psychoanalysis.",
  },
  {
    year: "1983–1986",
    title: "The novels",
    body: "The Sharing (1983) and Midnight Walking (1986), part of a noir quartet with Lamplighter and Cried the Piper.",
  },
  {
    year: "1994",
    title: "Translation begins",
    body: "Broke into translation with Return to Vietnam.",
  },
  {
    year: "1996–2011",
    title: "Science and medicine",
    body: "The Scientific 100, Doctors and Discoveries, and tPA for Stroke with Justin A. Zivin, MD, PhD.",
  },
  {
    year: "2011",
    title: "NEA Fellowship",
    body: "Awarded a National Endowment for the Arts Translation Fellowship for Aline and Valcour.",
  },
  {
    year: "2019",
    title: "Aline and Valcour",
    body: "The first complete English translation of Sade's 1795 novel, in three volumes, with Jocelyne Geneviève Barque.",
  },
  {
    year: "Today",
    title: "New York City",
    body: "Lives and writes in New York City.",
  },
];
