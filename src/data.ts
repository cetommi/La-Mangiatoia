import { MenuCategory, Review } from './types';

export const RESTAURANT_INFO = {
  name: "La Mangiatoia",
  tagline: "Osteria Locanda",
  headline: "La cucina di una volta, ogni giorno.",
  subheadline: "Sapori autentici, ospitalità genuina e tradizione cremonese nel cuore di Sesto ed Uniti.",
  phone: "380 630 7001",
  phoneFormatted: "+39 380 630 7001",
  email: "info@lamangiatoiaosteria.it",
  address: "Via Cavatigozzi, 26, 26028 Sesto ed Uniti (CR)",
  googleMapsUrl: "https://maps.google.com/?q=Via+Cavatigozzi+26,+26028+Sesto+ed+Uniti,+CR",
  googlePlusCode: "5X65+7H Sesto ed Uniti, Provincia di Cremona",
  hours: [
    { days: "Lunedì - Venerdì", lunch: "12:00 - 14:30", dinner: "19:00 - 22:30", note: "Pranzo di lavoro a 12€" },
    { days: "Sabato", lunch: "Chiuso", dinner: "19:00 - 23:00", note: "Serata enogastronomica" },
    { days: "Domenica", lunch: "12:00 - 15:00", dinner: "Chiuso", note: "Pranzo domenicale tra amici" }
  ],
  features: [
    "Consumazione sul posto",
    "Asporto",
    "Consegna a domicilio",
    "Gestione Familiare",
    "LGBTQ+ Friendly",
    "Proprietà di Donne"
  ],
  story: {
    year: "1994",
    lead: "Da oltre trent'anni, La Mangiatoia accoglie coppie, famiglie e viaggiatori in un ambiente caldo e tipicamente osteria piacentina-cremonese.",
    chef: "La Nostra Famiglia",
    paragraphs: [
      "La nostra osteria nasce con l'idea semplice di celebrare gli ingredienti d'eccellenza della pianura padana. Tra le piastre calde della nostra cucina, le mani sapienti preparano ogni giorno gli gnocchi fatti in casa secondo l'antica ricetta di famiglia e friggono la fragrante torta fritta che accompagna i salumi tipici della zona.",
      "La gestione è interamente di stampo familiare, portata avanti con grande amore e dedizione, accogliendo tutti con la medesima gentilezza che riserveremmo a degli amici a pranzo nella nostra casa. Un'atmosfera rustica, autentica e sincera, dove i prezzi sono onesti e la qualità del cibo è sacra."
    ]
  },
  ratings: {
    average: 4.3,
    totalCount: 428,
    platform: "Google Reviews"
  }
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Le Cose Sfiziose & Antipasti",
    description: "Ideali per cominciare con allegria e per accompagnare un buon bicchiere di vino dei colli.",
    items: [
      {
        id: "ant-01",
        name: "Torta Fritta e Salumi Tipici del Territorio",
        description: "Torta fritta calda, fragrante e gonfia al punto giusto, accompagnata da spalla cotta calda, salame cremonese D.O.P. e coppa piacentina.",
        price: 12.00,
        tags: ["Specialità", "Popolare"]
      },
      {
        id: "ant-02",
        name: "Giardiniera Casereccia in Agrodolce",
        description: "Verdure croccanti dell'orto preparate in casa da noi secondo la ricetta della tradizione.",
        price: 6.00,
        tags: ["Vegano", "Gluten Free"]
      },
      {
        id: "ant-03",
        name: "Crostini Rustici con fegatini e lardo",
        description: "Pane di campagna abbrustolito con patè tiepido di fegatini sfumato al gutturnio e lardo aromatizzato alle erbe.",
        price: 8.00,
        tags: []
      }
    ]
  },
  {
    id: "primi",
    title: "I Primi Piatti di Pasta Fresca",
    description: "Tutta la nostra pasta e i nostri gnocchi sono rigorosamente fatti in casa, tirati e tagliati a mano ogni mattina.",
    items: [
      {
        id: "pri-01",
        name: "Gnocchi alla Tognazzi",
        description: "La nostra specialità leggendaria! Gnocchi di patate soffici e fatti a mano conditi con una crema vellutata e saporita, ricca di gusto, ispirata alla storica ricetta dell'attore Ugo Tognazzi.",
        price: 11.00,
        tags: ["Signature", "Popolare"]
      },
      {
        id: "pri-02",
        name: "Pisarei e Fasò",
        description: "Il re della tradizione piacentina: gnocchetti di farina e pangrattato fatti a mano, abbinati a un sugo fitto e saporito di fagioli borlotti, cotenna e pancia di maiale.",
        price: 10.00,
        tags: ["Tradizione", "Popolare"]
      },
      {
        id: "pri-03",
        name: "Gnocchetti di Patate al Gorgonzola Dolce e Noci",
        description: "Morbidi gnocchetti artigianali avvolti in una vellutata di gorgonzola D.O.P. e tempestati di gherigli di noci del territorio tostati.",
        price: 11.00,
        tags: ["Vegetariano"]
      },
      {
        id: "pri-04",
        name: "Tortelli di Zucca alla Cremonese",
        description: "Pasta all'uovo ripiena di zucca mantovana, amaretto croccante, mostarda cremonese ed erba salvia, conditi con burro fuso d'alpeggio e Grana Padano.",
        price: 12.00,
        tags: ["Tradizione"]
      }
    ]
  },
  {
    id: "secondi",
    title: "I Secondi Piatti e la Brace",
    description: "Carni selezionate da allevamenti locali e preparate con semplicità, privilegiando cotture lente o alla griglia.",
    items: [
      {
        id: "sec-01",
        name: "Bistecca di Scottona alla Griglia",
        description: "Bistecca saporita e succosa cotta sui carboni, finita con sale grosso di Cervia e rametti di rosmarino fresco.",
        price: 16.00,
        tags: ["Dalla Brace"]
      },
      {
        id: "sec-02",
        name: "Coppa di Maiale al Forno",
        description: "Coppa aromatizzata e cotta a bassissima temperatura per molte ore, così morbida da sciogliersi in bocca. Servita con patate arrosto.",
        price: 14.00,
        tags: ["Consigliato"]
      },
      {
        id: "sec-03",
        name: "Cotechino Cremonese Nostrano con Purè",
        description: "Il cotechino saporito della nostra norcineria bollito lentamente, accompagnato da un purè di patate biologiche montato al burro.",
        price: 12.00,
        tags: ["Tradizione"]
      }
    ]
  },
  {
    id: "dolci",
    title: "I Dolci della Mangiatoia",
    description: "Un pezzo di dolcezza fatto con ingredienti freschi per concludere con un sorriso.",
    items: [
      {
        id: "dol-01",
        name: "Tiramisù Cremoso della Mangiatoia",
        description: "Il tiramisù più desiderato: crema soffice al mascarpone freschissimo, savoiardi artigianali imbevuti nel caffè moka bollente e spolverata generosa di cacao amaro.",
        price: 5.00,
        tags: ["Popolare", "Signature"]
      },
      {
        id: "dol-02",
        name: "Torta Sbrisolona Artigianale",
        description: "La famosissima torta asciutta e friabile alle mandorle e farina gialla, spezzata rigorosamente a mano e bagnata, come da rito, con grappa locale.",
        price: 5.00,
        tags: ["Tradizione"]
      },
      {
        id: "dol-03",
        name: "Salame al Cioccolato con Panna Montata",
        description: "Un grande classico di famiglia con finissimo cioccolato fondente e biscotti sbriciolati, servito con un ciuffo di panna fresca vaccina.",
        price: 5.00,
        tags: []
      }
    ]
  },
  {
    id: "bevande",
    title: "I Vini delle Cantine Locali",
    description: "Una selezione genuina dei colli vicini, perfetta da bere in compagnia.",
    items: [
      {
        id: "bev-01",
        name: "Gutturnio Frizzante D.O.C. (Colli Piacentini)",
        description: "Vino rosso brioso, fresco e fruttato. Il partner naturale per la torta fritta e i primi di pasta. Bottiglia.",
        price: 14.00,
        tags: ["Rosso", "Ideale con Torta Fritta"]
      },
      {
        id: "bev-02",
        name: "Bonarda dell'Oltrepò Pavese D.O.C.",
        description: "Vino rosso fermo o frizzante, strutturato ed elegantemente amabile sul finale. Bottiglia.",
        price: 15.00,
        tags: ["Rosso"]
      },
      {
        id: "bev-03",
        name: "Ortrugo dei Colli Piacentini D.O.C.",
        description: "Vino bianco frizzante, secco e delicato, dal retrogusto mandorlato molto gradevole. Bottiglia.",
        price: 13.00,
        tags: ["Bianco"]
      },
      {
        id: "bev-04",
        name: "Vino della Casa (Rosso / Bianco)",
        description: "Selezionato alla spina dai produttori della nostra zona. Leggero, sincero, servito in caraffa da 1 Litro o mezzo litro.",
        price: 8.00,
        tags: ["Caraffa 1L", "Ottimo Rapporto Qualità/Prezzo"]
      }
    ]
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Alessandro Conti",
    rating: 5,
    timeAgo: "7 mesi fa",
    text: "Dopo tanti rimbalzi causa locali strapieni, abbiamo trovato questa location tipica e caratteristica per un pranzo domenicale tra amici. Ottima torta fritta, ottimi pisaré con fasoo, ottimi gli gnocchetti di vario tipo. Ci siamo trovati bene con servizio veloce e gentile. Da provare!!",
    accentQuote: "Ottima torta fritta, ottimi pisaré con fasoo e gnocchetti",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false
  },
  {
    id: "rev-02",
    author: "Mariella Guardalà",
    rating: 5,
    timeAgo: "3 mesi fa",
    text: "Ambiente accogliente, torta fritta una bontà, gnocchi in tanti modi, in due parole cibo ottimo, prezzi onesti per essere genovese, e da provare per credere.",
    accentQuote: "Cibo ottimo, torta fritta una bontà e prezzi onesti",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true
  },
  {
    id: "rev-03",
    author: "Luisa Amodio",
    rating: 5,
    timeAgo: "5 mesi fa",
    text: "Ristorante tipico, spartano ma accogliente. Personale simpatico e attento, cibo ottimo e rapporto qualità prezzo da urlo. Ci torneremo sicuramente!",
    accentQuote: "Rapporto qualità prezzo da urlo!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true
  },
  {
    id: "rev-04",
    author: "Giuseppe B.",
    rating: 4,
    timeAgo: "1 mese fa",
    text: "Classica osteria, consigliata per pausa pranzo, offre un menù fisso di 12€ pulito, gestione familiare veloce adatta a coppie, banchisti o piccole compagnie. Un punto di riferimento fisso quando si passa per Sesto ed Uniti.",
    accentQuote: "Ideale per pausa pranzo, servizio veloce",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false
  }
];

export const CATEGORY_IMAGES: Record<string, string> = {
  antipasti: "https://images.unsplash.com/photo-1541532150-1c94481b2f7d?auto=format&fit=crop&w=800&q=80",
  primi: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  secondi: "https://images.unsplash.com/photo-1432139548711-03b2217b904b?auto=format&fit=crop&w=800&q=80",
  dolci: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
  bevande: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
};
