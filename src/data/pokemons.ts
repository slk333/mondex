import { Pokemon } from "../Types/Pokemon"

/* 


#		
#	Pokémon	HP	Attack	Defense	Special	Speed
1	Bulbasaur	45	49	49	65	45
2	Ivysaur	60	62	63	80	60
3	Venusaur	80	82	83	100	80
4	Charmander	39	52	43	50	65
5	Charmeleon	58	64	58	65	80
6	Charizard	78	84	78	85	100
7	Squirtle	44	48	65	50	43
8	Wartortle	59	63	80	65	58
9	Blastoise	79	83	100	85	78
10	Caterpie	45	30	35	20	45
11	Metapod	50	20	55	25	30
12	Butterfree	60	45	50	80	70
13	Weedle	40	35	30	20	50
14	Kakuna	45	25	50	25	35
15	Beedrill	65	80	40	45	75
16	Pidgey	40	45	40	35	56
17	Pidgeotto	63	60	55	50	71
18	Pidgeot	83	80	75	70	91
19	Rattata	30	56	35	25	72
20	Raticate	55	81	60	50	97
21	Spearow	40	60	30	31	70
22	Fearow	65	90	65	61	100
23	Ekans	35	60	44	40	55
24	Arbok	60	85	69	65	80
25	Pikachu	35	55	30	50	90
26	Raichu	60	90	55	90	100
27	Sandshrew	50	75	85	30	40
28	Sandslash	75	100	110	55	65
29	Nidoran♀	55	47	52	40	41
30	Nidorina	70	62	67	55	56
31	Nidoqueen	90	82	87	75	76
32	Nidoran♂	46	57	40	40	50
33	Nidorino	61	72	57	55	65
34	Nidoking	81	92	77	75	85
35	Clefairy	70	45	48	60	35
36	Clefable	95	70	73	85	60
37	Vulpix	38	41	40	65	65
38	Ninetales	73	76	75	100	100
39	Jigglypuff	115	45	20	25	20
40	Wigglytuff	140	70	45	50	45
41	Zubat	40	45	35	40	55
42	Golbat	75	80	70	75	90
43	Oddish	45	50	55	75	30
44	Gloom	60	65	70	85	40
45	Vileplume	75	80	85	100	50
46	Paras	35	70	55	55	25
47	Parasect	60	95	80	80	30
48	Venonat	60	55	50	40	45
49	Venomoth	70	65	60	90	90
50	Diglett	10	55	25	45	95
51	Dugtrio	35	80	50	70	120
52	Meowth	40	45	35	40	90
53	Persian	65	70	60	65	115
54	Psyduck	50	52	48	50	55
55	Golduck	80	82	78	80	85
56	Mankey	40	80	35	35	70
57	Primeape	65	105	60	60	95
58	Growlithe	55	70	45	50	60
59	Arcanine	90	110	80	80	95
60	Poliwag	40	50	40	40	90
61	Poliwhirl	65	65	65	50	90
62	Poliwrath	90	85	95	70	70
63	Abra	25	20	15	105	90
64	Kadabra	40	35	30	120	105
65	Alakazam	55	50	45	135	120
66	Machop	70	80	50	35	35
67	Machoke	80	100	70	50	45
68	Machamp	90	130	80	65	55
69	Bellsprout	50	75	35	70	40
70	Weepinbell	65	90	50	85	55
71	Victreebel	80	105	65	100	70
72	Tentacool	40	40	35	100	70
73	Tentacruel	80	70	65	120	100
74	Geodude	40	80	100	30	20
75	Graveler	55	95	115	45	35
76	Golem	80	110	130	55	45
77	Ponyta	50	85	55	65	90
78	Rapidash	65	100	70	80	105
79	Slowpoke	90	65	65	40	15
80	Slowbro	95	75	110	80	30
81	Magnemite	25	35	70	95	45
82	Magneton	50	60	95	120	70
83	Farfetch'd	52	65	55	58	60
84	Doduo	35	85	45	35	75
85	Dodrio	60	110	70	60	100
86	Seel	65	45	55	70	45
87	Dewgong	90	70	80	95	70
88	Grimer	80	80	50	40	25
89	Muk	105	105	75	65	50
90	Shellder	30	65	100	45	40
91	Cloyster	50	95	180	85	70
92	Gastly	30	35	30	100	80
93	Haunter	45	50	45	115	95
94	Gengar	60	65	60	130	110
95	Onix	35	45	160	30	70
96	Drowzee	60	48	45	90	42
97	Hypno	85	73	70	115	67
98	Krabby	30	105	90	25	50
99	Kingler	55	130	115	50	75
100	Voltorb	40	30	50	55	100
101	Electrode	60	50	70	80	140
102	Exeggcute	60	40	80	60	40
103	Exeggutor	95	95	85	125	55
104	Cubone	50	50	95	40	35
105	Marowak	60	80	110	50	45
106	Hitmonlee	50	120	53	35	87
107	Hitmonchan	50	105	79	35	76
108	Lickitung	90	55	75	60	30
109	Koffing	40	65	95	60	35
110	Weezing	65	90	120	85	60
111	Rhyhorn	80	85	95	30	25
112	Rhydon	105	130	120	45	40
113	Chansey	250	5	5	105	50
114	Tangela	65	55	115	100	60
115	Kangaskhan	105	95	80	40	90
116	Horsea	30	40	70	70	60
117	Seadra	55	65	95	95	85
118	Goldeen	45	67	60	50	63
119	Seaking	80	92	65	80	68
120	Staryu	30	45	55	70	85
121	Starmie	60	75	85	100	115
122	Mr. Mime	40	45	65	100	90
123	Scyther	70	110	80	55	105
124	Jynx	65	50	35	95	95
125	Electabuzz	65	83	57	85	105
126	Magmar	65	95	57	85	93
127	Pinsir	65	125	100	55	85
128	Tauros	75	100	95	70	110
129	Magikarp	20	10	55	20	80
130	Gyarados	95	125	79	100	81
131	Lapras	130	85	80	95	60
132	Ditto	48	48	48	48	48
133	Eevee	55	55	50	65	55
134	Vaporeon	130	65	60	110	65
135	Jolteon	65	65	60	110	130
136	Flareon	65	130	60	110	65
137	Porygon	65	60	70	75	40
138	Omanyte	35	40	100	90	35
139	Omastar	70	60	125	115	55
140	Kabuto	30	80	90	45	55
141	Kabutops	60	115	105	70	80
142	Aerodactyl	80	105	65	60	130
143	Snorlax	160	110	65	65	30
144	Articuno	90	85	100	125	85
145	Zapdos	90	90	85	125	100
146	Moltres	90	100	90	125	90
147	Dratini	41	64	45	50	50
148	Dragonair	61	84	65	70	70
149	Dragonite	91	134	95	100	80
150	Mewtwo	106	110	90	154	130
151	Mew	100	100	100	100	100
*/

const baseURL: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/"

export const pokemons: Pokemon[] = [
    {
        name: "bulbasaur",
        id: 1,
        spriteURL: `${baseURL}1.png`,
        types: ["grass", "poison"],
        stats: [45, 49, 49, 65, 45],
    },
    {
        name: "ivysaur",
        id: 2,
        spriteURL: `${baseURL}2.png`,
        types: ["grass", "poison"],
        stats: [60, 62, 63, 80, 60],
    },
    {
        name: "venusaur",
        id: 3,
        spriteURL: `${baseURL}3.png`,
        types: ["grass", "poison"],
        stats: [80, 82, 83, 100, 80],
    },
    {
        name: "charmander",
        id: 4,
        spriteURL: `${baseURL}4.png`,
        types: ["fire"],
        stats: [39, 52, 43, 50, 65],
    },
    {
        name: "charmeleon",
        id: 5,
        spriteURL: `${baseURL}5.png`,
        types: ["fire"],
        stats: [58, 64, 58, 65, 80],
    },
    {
        name: "charizard",
        id: 6,
        spriteURL: `${baseURL}6.png`,
        types: ["fire", "flying"],
        stats: [78, 84, 78, 85, 100],
    },
    {
        name: "squirtle",
        id: 7,
        spriteURL: `${baseURL}7.png`,
        types: ["water"],
        stats: [44, 48, 65, 50, 43],
    },
    {
        name: "wartortle",
        id: 8,
        spriteURL: `${baseURL}8.png`,
        types: ["water"],
        stats: [59, 63, 80, 65, 58],
    },
    {
        name: "blastoise",
        id: 9,
        spriteURL: `${baseURL}9.png`,
        types: ["water"],
        stats: [79, 83, 100, 85, 78],
    },
    {
        name: "caterpie",
        id: 10,
        spriteURL: `${baseURL}10.png`,
        types: ["bug"],
        stats: [45, 30, 35, 20, 45],
    },
    {
        name: "metapod",
        id: 11,
        spriteURL: `${baseURL}11.png`,
        types: ["bug"],
        stats: [50, 20, 55, 25, 30],
    },
    {
        name: "butterfree",
        id: 12,
        spriteURL: `${baseURL}12.png`,
        types: ["bug", "flying"],
        stats: [60, 45, 50, 80, 70],
    },
    {
        name: "weedle",
        id: 13,
        spriteURL: `${baseURL}13.png`,
        types: ["bug", "poison"],
        stats: [40, 35, 30, 20, 50],
    },
    {
        name: "kakuna",
        id: 14,
        spriteURL: `${baseURL}14.png`,
        types: ["bug", "poison"],
        stats: [45, 25, 50, 25, 35],
    },
    {
        name: "beedrill",
        id: 15,
        spriteURL: `${baseURL}15.png`,
        types: ["bug", "poison"],
        stats: [65, 90, 40, 45, 75],
    },
    {
        name: "pidgey",
        id: 16,
        spriteURL: `${baseURL}16.png`,
        types: ["normal", "flying"],
        stats: [40, 45, 40, 35, 56],
    },
    {
        name: "pidgeotto",
        id: 17,
        spriteURL: `${baseURL}17.png`,
        types: ["normal", "flying"],
        stats: [63, 60, 55, 50, 71],
    },
    {
        name: "pidgeot",
        id: 18,
        spriteURL: `${baseURL}18.png`,
        types: ["normal", "flying"],
        stats: [83, 80, 75, 70, 91],
    },
    {
        name: "rattata",
        id: 19,
        spriteURL: `${baseURL}19.png`,
        types: ["normal"],
        stats: [30, 56, 35, 25, 72],
    },
    {
        name: "raticate",
        id: 20,
        spriteURL: `${baseURL}20.png`,
        types: ["normal"],
        stats: [55, 81, 60, 50, 97],
    },
    {
        name: "spearow",
        id: 21,
        spriteURL: `${baseURL}21.png`,
        types: ["normal", "flying"],
        stats: [40, 60, 30, 31, 70],
    },
    {
        name: "fearow",
        id: 22,
        spriteURL: `${baseURL}22.png`,
        types: ["normal", "flying"],
        stats: [65, 90, 65, 61, 100],
    },
    {
        name: "ekans",
        id: 23,
        spriteURL: `${baseURL}23.png`,
        types: ["poison"],
        stats: [35, 60, 44, 40, 55],
    },
    {
        name: "arbok",
        id: 24,
        spriteURL: `${baseURL}24.png`,
        types: ["poison"],
        stats: [60, 85, 69, 65, 80],
    },
    {
        name: "pikachu",
        id: 25,
        spriteURL: `${baseURL}25.png`,
        types: ["electric"],
        stats: [35, 55, 40, 50, 90],
    },
    {
        name: "raichu",
        id: 26,
        spriteURL: `${baseURL}26.png`,
        types: ["electric"],
        stats: [60, 90, 55, 90, 100],
    },
    {
        name: "sandshrew",
        id: 27,
        spriteURL: `${baseURL}27.png`,
        types: ["ground"],
        stats: [50, 75, 85, 30, 40],
    },
    {
        name: "sandslash",
        id: 28,
        spriteURL: `${baseURL}28.png`,
        types: ["ground"],
        stats: [75, 100, 110, 55, 65],
    },
    {
        name: "nidoran-f",
        id: 29,
        spriteURL: `${baseURL}29.png`,
        types: ["poison"],
        stats: [55, 47, 52, 40, 41],
    },
    {
        name: "nidorina",
        id: 30,
        spriteURL: `${baseURL}30.png`,
        types: ["poison"],
        stats: [70, 62, 67, 55, 56],
    },
    {
        name: "nidoqueen",
        id: 31,
        spriteURL: `${baseURL}31.png`,
        types: ["poison", "ground"],
        stats: [90, 92, 87, 75, 76],
    },
    {
        name: "nidoran-m",
        id: 32,
        spriteURL: `${baseURL}32.png`,
        types: ["poison"],
        stats: [46, 57, 40, 40, 50],
    },
    {
        name: "nidorino",
        id: 33,
        spriteURL: `${baseURL}33.png`,
        types: ["poison"],
        stats: [61, 72, 57, 55, 65],
    },
    {
        name: "nidoking",
        id: 34,
        spriteURL: `${baseURL}34.png`,
        types: ["poison", "ground"],
        stats: [81, 92, 77, 75, 85],
    },
    {
        name: "clefairy",
        id: 35,
        spriteURL: `${baseURL}35.png`,
        types: ["normal"],
        stats: [70, 45, 48, 60, 35],
    },
    {
        name: "clefable",
        id: 36,
        spriteURL: `${baseURL}36.png`,
        types: ["normal"],
        stats: [95, 70, 73, 85, 60],
    },
    {
        name: "vulpix",
        id: 37,
        spriteURL: `${baseURL}37.png`,
        types: ["fire"],
        stats: [38, 41, 40, 65, 65],
    },
    {
        name: "ninetales",
        id: 38,
        spriteURL: `${baseURL}38.png`,
        types: ["fire"],
        stats: [73, 76, 75, 100, 100],
    },
    {
        name: "jigglypuff",
        id: 39,
        spriteURL: `${baseURL}39.png`,
        types: ["normal"],
        stats: [115, 45, 20, 25, 20],
    },
    {
        name: "wigglytuff",
        id: 40,
        spriteURL: `${baseURL}40.png`,
        types: ["normal"],
        stats: [140, 70, 45, 50, 45],
    },
    {
        name: "zubat",
        id: 41,
        spriteURL: `${baseURL}41.png`,
        types: ["poison", "flying"],
        stats: [40, 45, 35, 40, 55],
    },
    {
        name: "golbat",
        id: 42,
        spriteURL: `${baseURL}42.png`,
        types: ["poison", "flying"],
        stats: [75, 80, 70, 75, 90],
    },
    {
        name: "oddish",
        id: 43,
        spriteURL: `${baseURL}43.png`,
        types: ["grass", "poison"],
        stats: [45, 50, 55, 75, 30],
    },
    {
        name: "gloom",
        id: 44,
        spriteURL: `${baseURL}44.png`,
        types: ["grass", "poison"],
        stats: [60, 65, 70, 85, 40],
    },
    {
        name: "vileplume",
        id: 45,
        spriteURL: `${baseURL}45.png`,
        types: ["grass", "poison"],
        stats: [75, 80, 85, 100, 50],
    },
    {
        name: "paras",
        id: 46,
        spriteURL: `${baseURL}46.png`,
        types: ["bug", "grass"],
        stats: [35, 70, 55, 55, 25],
    },
    {
        name: "parasect",
        id: 47,
        spriteURL: `${baseURL}47.png`,
        types: ["bug", "grass"],
        stats: [60, 95, 80, 80, 30],
    },
    {
        name: "venonat",
        id: 48,
        spriteURL: `${baseURL}48.png`,
        types: ["bug", "poison"],
        stats: [60, 55, 50, 40, 45],
    },
    {
        name: "venomoth",
        id: 49,
        spriteURL: `${baseURL}49.png`,
        types: ["bug", "poison"],
        stats: [70, 65, 60, 90, 90],
    },
    {
        name: "diglett",
        id: 50,
        spriteURL: `${baseURL}50.png`,
        types: ["ground"],
        stats: [10, 55, 25, 45, 95],
    },
    {
        name: "dugtrio",
        id: 51,
        spriteURL: `${baseURL}51.png`,
        types: ["ground"],
        stats: [35, 80, 50, 70, 120],
    },
    {
        name: "meowth",
        id: 52,
        spriteURL: `${baseURL}52.png`,
        types: ["normal"],
        stats: [40, 45, 35, 40, 90],
    },
    {
        name: "persian",
        id: 53,
        spriteURL: `${baseURL}53.png`,
        types: ["normal"],
        stats: [65, 70, 60, 65, 115],
    },
    {
        name: "psyduck",
        id: 54,
        spriteURL: `${baseURL}54.png`,
        types: ["water"],
        stats: [50, 52, 48, 50, 55],
    },
    {
        name: "golduck",
        id: 55,
        spriteURL: `${baseURL}55.png`,
        types: ["water"],
        stats: [80, 82, 78, 80, 85],
    },
    {
        name: "mankey",
        id: 56,
        spriteURL: `${baseURL}56.png`,
        types: ["fighting"],
        stats: [40, 80, 35, 35, 70],
    },
    {
        name: "primeape",
        id: 57,
        spriteURL: `${baseURL}57.png`,
        types: ["fighting"],
        stats: [65, 105, 60, 60, 95],
    },
    {
        name: "growlithe",
        id: 58,
        spriteURL: `${baseURL}58.png`,
        types: ["fire"],
        stats: [55, 70, 45, 50, 60],
    },
    {
        name: "arcanine",
        id: 59,
        spriteURL: `${baseURL}59.png`,
        types: ["fire"],
        stats: [90, 110, 80, 80, 95],
    },
    {
        name: "poliwag",
        id: 60,
        spriteURL: `${baseURL}60.png`,
        types: ["water"],
        stats: [40, 50, 40, 40, 90],
    },
    {
        name: "poliwhirl",
        id: 61,
        spriteURL: `${baseURL}61.png`,
        types: ["water"],
        stats: [65, 65, 65, 50, 90],
    },
    {
        name: "poliwrath",
        id: 62,
        spriteURL: `${baseURL}62.png`,
        types: ["water", "fighting"],
        stats: [90, 85, 95, 70, 70],
    },
    {
        name: "abra",
        id: 63,
        spriteURL: `${baseURL}63.png`,
        types: ["psychic"],
        stats: [25, 20, 15, 105, 90],
    },
    {
        name: "kadabra",
        id: 64,
        spriteURL: `${baseURL}64.png`,
        types: ["psychic"],
        stats: [40, 35, 30, 120, 105],
    },
    {
        name: "alakazam",
        id: 65,
        spriteURL: `${baseURL}65.png`,
        types: ["psychic"],
        stats: [55, 50, 45, 135, 120],
    },
    {
        name: "machop",
        id: 66,
        spriteURL: `${baseURL}66.png`,
        types: ["fighting"],
        stats: [70, 80, 50, 35, 35],
    },
    {
        name: "machoke",
        id: 67,
        spriteURL: `${baseURL}67.png`,
        types: ["fighting"],
        stats: [80, 100, 70, 50, 45],
    },
    {
        name: "machamp",
        id: 68,
        spriteURL: `${baseURL}68.png`,
        types: ["fighting"],
        stats: [90, 130, 80, 65, 55],
    },
    {
        name: "bellsprout",
        id: 69,
        spriteURL: `${baseURL}69.png`,
        types: ["grass", "poison"],
        stats: [50, 75, 35, 70, 40],
    },
    {
        name: "weepinbell",
        id: 70,
        spriteURL: `${baseURL}70.png`,
        types: ["grass", "poison"],
        stats: [65, 90, 50, 85, 55],
    },
    {
        name: "victreebel",
        id: 71,
        spriteURL: `${baseURL}71.png`,
        types: ["grass", "poison"],
        stats: [80, 105, 65, 100, 70],
    },
    {
        name: "tentacool",
        id: 72,
        spriteURL: `${baseURL}72.png`,
        types: ["water", "poison"],
        stats: [40, 40, 35, 100, 70],
    },
    {
        name: "tentacruel",
        id: 73,
        spriteURL: `${baseURL}73.png`,
        types: ["water", "poison"],
        stats: [80, 70, 65, 120, 100],
    },
    {
        name: "geodude",
        id: 74,
        spriteURL: `${baseURL}74.png`,
        types: ["rock", "ground"],
        stats: [40, 80, 100, 30, 20],
    },
    {
        name: "graveler",
        id: 75,
        spriteURL: `${baseURL}75.png`,
        types: ["rock", "ground"],
        stats: [55, 95, 115, 45, 35],
    },
    {
        name: "golem",
        id: 76,
        spriteURL: `${baseURL}76.png`,
        types: ["rock", "ground"],
        stats: [80, 110, 130, 55, 45],
    },
    {
        name: "ponyta",
        id: 77,
        spriteURL: `${baseURL}77.png`,
        types: ["fire"],
        stats: [50, 85, 55, 65, 90],
    },
    {
        name: "rapidash",
        id: 78,
        spriteURL: `${baseURL}78.png`,
        types: ["fire"],
        stats: [65, 100, 70, 80, 105],
    },
    {
        name: "slowpoke",
        id: 79,
        spriteURL: `${baseURL}79.png`,
        types: ["water", "psychic"],
        stats: [90, 65, 65, 40, 15],
    },
    {
        name: "slowbro",
        id: 80,
        spriteURL: `${baseURL}80.png`,
        types: ["water", "psychic"],
        stats: [95, 75, 110, 80, 30],
    },
    {
        name: "magnemite",
        id: 81,
        spriteURL: `${baseURL}81.png`,
        types: ["electric"],
        stats: [25, 35, 70, 95, 45],
    },
    {
        name: "magneton",
        id: 82,
        spriteURL: `${baseURL}82.png`,
        types: ["electric"],
        stats: [50, 60, 95, 120, 70],
    },
    {
        name: "farfetchd",
        id: 83,
        spriteURL: `${baseURL}83.png`,
        types: ["normal", "flying"],
        stats: [52, 65, 55, 58, 60],
    },
    {
        name: "doduo",
        id: 84,
        spriteURL: `${baseURL}84.png`,
        types: ["normal", "flying"],
        stats: [35, 85, 45, 35, 75],
    },
    {
        name: "dodrio",
        id: 85,
        spriteURL: `${baseURL}85.png`,
        types: ["normal", "flying"],
        stats: [60, 110, 70, 60, 100],
    },
    {
        name: "seel",
        id: 86,
        spriteURL: `${baseURL}86.png`,
        types: ["water"],
        stats: [65, 45, 55, 70, 45],
    },
    {
        name: "dewgong",
        id: 87,
        spriteURL: `${baseURL}87.png`,
        types: ["water", "ice"],
        stats: [90, 70, 80, 95, 70],
    },
    {
        name: "grimer",
        id: 88,
        spriteURL: `${baseURL}88.png`,
        types: ["poison"],
        stats: [80, 80, 50, 40, 25],
    },
    {
        name: "muk",
        id: 89,
        spriteURL: `${baseURL}89.png`,
        types: ["poison"],
        stats: [105, 105, 75, 65, 50],
    },
    {
        name: "shellder",
        id: 90,
        spriteURL: `${baseURL}90.png`,
        types: ["water"],
        stats: [30, 65, 100, 45, 40],
    },
    {
        name: "cloyster",
        id: 91,
        spriteURL: `${baseURL}91.png`,
        types: ["water", "ice"],
        stats: [50, 95, 180, 85, 70],
    },
    {
        name: "gastly",
        id: 92,
        spriteURL: `${baseURL}92.png`,
        types: ["ghost", "poison"],
        stats: [30, 35, 30, 100, 80],
    },
    {
        name: "haunter",
        id: 93,
        spriteURL: `${baseURL}93.png`,
        types: ["ghost", "poison"],
        stats: [45, 50, 45, 115, 95],
    },
    {
        name: "gengar",
        id: 94,
        spriteURL: `${baseURL}94.png`,
        types: ["ghost", "poison"],
        stats: [60, 65, 60, 130, 110],
    },
    {
        name: "onix",
        id: 95,
        spriteURL: `${baseURL}95.png`,
        types: ["rock", "ground"],
        stats: [35, 45, 160, 30, 70],
    },
    {
        name: "drowzee",
        id: 96,
        spriteURL: `${baseURL}96.png`,
        types: ["psychic"],
        stats: [60, 48, 45, 90, 42],
    },
    {
        name: "hypno",
        id: 97,
        spriteURL: `${baseURL}97.png`,
        types: ["psychic"],
        stats: [85, 73, 70, 115, 67],
    },
    {
        name: "krabby",
        id: 98,
        spriteURL: `${baseURL}98.png`,
        types: ["water"],
        stats: [30, 105, 90, 25, 50],
    },
    {
        name: "kingler",
        id: 99,
        spriteURL: `${baseURL}99.png`,
        types: ["water"],
        stats: [55, 130, 115, 50, 75],
    },
    {
        name: "voltorb",
        id: 100,
        spriteURL: `${baseURL}100.png`,
        types: ["electric"],
        stats: [40, 30, 50, 55, 100],
    },
    {
        name: "electrode",
        id: 101,
        spriteURL: `${baseURL}101.png`,
        types: ["electric"],
        stats: [60, 50, 70, 80, 140],
    },
    {
        name: "exeggcute",
        id: 102,
        spriteURL: `${baseURL}102.png`,
        types: ["grass", "psychic"],
        stats: [60, 40, 80, 60, 40],
    },
    {
        name: "exeggutor",
        id: 103,
        spriteURL: `${baseURL}103.png`,
        types: ["grass", "psychic"],
        stats: [95, 95, 85, 125, 55],
    },
    {
        name: "cubone",
        id: 104,
        spriteURL: `${baseURL}104.png`,
        types: ["ground"],
        stats: [50, 50, 95, 40, 35],
    },
    {
        name: "marowak",
        id: 105,
        spriteURL: `${baseURL}105.png`,
        types: ["ground"],
        stats: [60, 80, 110, 50, 45],
    },
    {
        name: "hitmonlee",
        id: 106,
        spriteURL: `${baseURL}106.png`,
        types: ["fighting"],
        stats: [50, 120, 53, 35, 87],
    },
    {
        name: "hitmonchan",
        id: 107,
        spriteURL: `${baseURL}107.png`,
        types: ["fighting"],
        stats: [50, 105, 79, 35, 76],
    },
    {
        name: "lickitung",
        id: 108,
        spriteURL: `${baseURL}108.png`,
        types: ["normal"],
        stats: [90, 55, 75, 60, 30],
    },
    {
        name: "koffing",
        id: 109,
        spriteURL: `${baseURL}109.png`,
        types: ["poison"],
        stats: [40, 65, 95, 60, 35],
    },
    {
        name: "weezing",
        id: 110,
        spriteURL: `${baseURL}110.png`,
        types: ["poison"],
        stats: [65, 90, 120, 85, 60],
    },
    {
        name: "rhyhorn",
        id: 111,
        spriteURL: `${baseURL}111.png`,
        types: ["ground", "rock"],
        stats: [80, 85, 95, 30, 25],
    },
    {
        name: "rhydon",
        id: 112,
        spriteURL: `${baseURL}112.png`,
        types: ["ground", "rock"],
        stats: [105, 130, 120, 45, 40],
    },
    {
        name: "chansey",
        id: 113,
        spriteURL: `${baseURL}113.png`,
        types: ["normal"],
        stats: [250, 5, 5, 105, 50],
    },
    {
        name: "tangela",
        id: 114,
        spriteURL: `${baseURL}114.png`,
        types: ["grass"],
        stats: [65, 55, 115, 100, 60],
    },
    {
        name: "kangaskhan",
        id: 115,
        spriteURL: `${baseURL}115.png`,
        types: ["normal"],
        stats: [105, 95, 80, 40, 90],
    },
    {
        name: "horsea",
        id: 116,
        spriteURL: `${baseURL}116.png`,
        types: ["water"],
        stats: [30, 40, 70, 70, 60],
    },
    {
        name: "seadra",
        id: 117,
        spriteURL: `${baseURL}117.png`,
        types: ["water"],
        stats: [55, 65, 95, 95, 85],
    },
    {
        name: "goldeen",
        id: 118,
        spriteURL: `${baseURL}118.png`,
        types: ["water"],
        stats: [45, 67, 60, 50, 63],
    },
    {
        name: "seaking",
        id: 119,
        spriteURL: `${baseURL}119.png`,
        types: ["water"],
        stats: [80, 92, 65, 80, 68],
    },
    {
        name: "staryu",
        id: 120,
        spriteURL: `${baseURL}120.png`,
        types: ["water"],
        stats: [30, 45, 55, 70, 85],
    },
    {
        name: "starmie",
        id: 121,
        spriteURL: `${baseURL}121.png`,
        types: ["water", "psychic"],
        stats: [60, 75, 85, 100, 115],
    },
    {
        name: "mr-mime",
        id: 122,
        spriteURL: `${baseURL}122.png`,
        types: ["psychic"],
        stats: [40, 45, 65, 100, 90],
    },
    {
        name: "scyther",
        id: 123,
        spriteURL: `${baseURL}123.png`,
        types: ["bug", "flying"],
        stats: [70, 110, 80, 55, 105],
    },
    {
        name: "jynx",
        id: 124,
        spriteURL: `${baseURL}124.png`,
        types: ["ice", "psychic"],
        stats: [65, 50, 35, 95, 95],
    },
    {
        name: "electabuzz",
        id: 125,
        spriteURL: `${baseURL}125.png`,
        types: ["electric"],
        stats: [65, 83, 57, 85, 105],
    },
    {
        name: "magmar",
        id: 126,
        spriteURL: `${baseURL}126.png`,
        types: ["fire"],
        stats: [65, 95, 57, 85, 93],
    },
    {
        name: "pinsir",
        id: 127,
        spriteURL: `${baseURL}127.png`,
        types: ["bug"],
        stats: [65, 125, 100, 55, 85],
    },
    {
        name: "tauros",
        id: 128,
        spriteURL: `${baseURL}128.png`,
        types: ["normal"],
        stats: [75, 100, 95, 70, 110],
    },
    {
        name: "magikarp",
        id: 129,
        spriteURL: `${baseURL}129.png`,
        types: ["water"],
        stats: [20, 10, 55, 20, 80],
    },
    {
        name: "gyarados",
        id: 130,
        spriteURL: `${baseURL}130.png`,
        types: ["water", "flying"],
        stats: [95, 125, 79, 100, 81],
    },
    {
        name: "lapras",
        id: 131,
        spriteURL: `${baseURL}131.png`,
        types: ["water", "ice"],
        stats: [130, 85, 80, 95, 60],
    },
    {
        name: "ditto",
        id: 132,
        spriteURL: `${baseURL}132.png`,
        types: ["normal"],
        stats: [48, 48, 48, 48, 48],
    },
    {
        name: "eevee",
        id: 133,
        spriteURL: `${baseURL}133.png`,
        types: ["normal"],
        stats: [55, 55, 50, 65, 55],
    },
    {
        name: "vaporeon",
        id: 134,
        spriteURL: `${baseURL}134.png`,
        types: ["water"],
        stats: [130, 65, 60, 110, 65],
    },
    {
        name: "jolteon",
        id: 135,
        spriteURL: `${baseURL}135.png`,
        types: ["electric"],
        stats: [65, 65, 60, 110, 130],
    },
    {
        name: "flareon",
        id: 136,
        spriteURL: `${baseURL}136.png`,
        types: ["fire"],
        stats: [65, 130, 60, 110, 65],
    },
    {
        name: "porygon",
        id: 137,
        spriteURL: `${baseURL}137.png`,
        types: ["normal"],
        stats: [65, 60, 70, 75, 40],
    },
    {
        name: "omanyte",
        id: 138,
        spriteURL: `${baseURL}138.png`,
        types: ["rock", "water"],
        stats: [35, 40, 100, 90, 35],
    },
    {
        name: "omastar",
        id: 139,
        spriteURL: `${baseURL}139.png`,
        types: ["rock", "water"],
        stats: [70, 60, 125, 115, 55],
    },
    {
        name: "kabuto",
        id: 140,
        spriteURL: `${baseURL}140.png`,
        types: ["rock", "water"],
        stats: [30, 80, 90, 45, 55],
    },
    {
        name: "kabutops",
        id: 141,
        spriteURL: `${baseURL}141.png`,
        types: ["rock", "water"],
        stats: [60, 115, 105, 70, 80],
    },
    {
        name: "aerodactyl",
        id: 142,
        spriteURL: `${baseURL}142.png`,
        types: ["rock", "flying"],
        stats: [80, 105, 65, 60, 130],
    },
    {
        name: "snorlax",
        id: 143,
        spriteURL: `${baseURL}143.png`,
        types: ["normal"],
        stats: [160, 110, 65, 65, 30],
    },
    {
        name: "articuno",
        id: 144,
        spriteURL: `${baseURL}144.png`,
        types: ["ice", "flying"],
        stats: [90, 85, 100, 125, 85],
    },
    {
        name: "zapdos",
        id: 145,
        spriteURL: `${baseURL}145.png`,
        types: ["electric", "flying"],
        stats: [90, 90, 85, 125, 100],
    },
    {
        name: "moltres",
        id: 146,
        spriteURL: `${baseURL}146.png`,
        types: ["fire", "flying"],
        stats: [90, 100, 90, 125, 90],
    },
    {
        name: "dratini",
        id: 147,
        spriteURL: `${baseURL}147.png`,
        types: ["dragon"],
        stats: [41, 64, 45, 50, 50],
    },
    {
        name: "dragonair",
        id: 148,
        spriteURL: `${baseURL}148.png`,
        types: ["dragon"],
        stats: [61, 84, 65, 70, 70],
    },
    {
        name: "dragonite",
        id: 149,
        spriteURL: `${baseURL}149.png`,
        types: ["dragon", "flying"],
        stats: [91, 134, 95, 100, 80],
    },
    {
        name: "mewtwo",
        id: 150,
        spriteURL: `${baseURL}150.png`,
        types: ["psychic"],
        stats: [106, 110, 90, 154, 130],
    },
    {
        name: "mew",
        id: 151,
        spriteURL: `${baseURL}151.png`,
        types: ["psychic"],
        stats: [100, 100, 100, 100, 100],
    },
]
