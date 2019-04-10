const pokemonList = [
  {
    id: 0,
    name: "Abomasnow",
    img: require("../assets/images/pokemon/abomasnow.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/abomasnow/"
  },
  {
    id: 1,
    name: "Archeops",
    img: require("../assets/images/pokemon/archeops.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/archeops/"
  },
  {
    id: 2,
    name: "Bayleef",
    img: require("../assets/images/pokemon/bayleef.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/bayleef/"
  },
  {
    id: 3,
    name: "Blastoise",
    img: require("../assets/images/pokemon/blastoise.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/blastoise/"
  },
  {
    id: 4,
    name: "Braviary",
    img: require("../assets/images/pokemon/braviary.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/braviary/"
  },
  {
    id: 5,
    name: "Cacturne",
    img: require("../assets/images/pokemon/cacturne.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/cacturne/"
  },
  {
    id: 6,
    name: "Carracosta",
    img: require("../assets/images/pokemon/carracosta.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/carracosta/"
  },
  {
    id: 7,
    name: "Dragonite",
    img: require("../assets/images/pokemon/dragonite.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/dragonite/"
  },
  {
    id: 8,
    name: "Electivire",
    img: require("../assets/images/pokemon/electivire.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/electivire/"
  },
  {
    id: 9,
    name: "Escavalier",
    img: require("../assets/images/pokemon/escavalier.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/escavalier/"
  },
  {
    id: 10,
    name: "Feraligatr",
    img: require("../assets/images/pokemon/feraligatr.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/feraligatr/"
  },
  {
    id: 11,
    name: "Flygon",
    img: require("../assets/images/pokemon/flygon.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/flygon/"

  },
  {
    id: 12,
    name: "Galvantula",
    img: require("../assets/images/pokemon/galvantula.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/galvantula/"
  },
  {
    id: 13,
    name: "Gardevoir",
    img: require("../assets/images/pokemon/gardevoir.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/gardevoir/"
  },
  {
    id: 14,
    name: "Genesect",
    img: require("../assets/images/pokemon/genesect.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/genesect/"
  },
  {
    id: 15,
    name: "Gigalith",
    img: require("../assets/images/pokemon/gigalith.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/gigalith/"
  },
  {
    id: 16,
    name: "Golduck",
    img: require("../assets/images/pokemon/golduck.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/golduck/"
  },
  {
    id: 17,
    name: "Golem",
    img: require("../assets/images/pokemon/golem.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/golem/"
  },
  {
    id: 18,
    name: "Grovyle",
    img: require("../assets/images/pokemon/grovyle.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/grovyle/"
  },
  {
    id: 19,
    name: "Gyarados",
    img: require("../assets/images/pokemon/gyarados.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/gyarados/"
  },
  {
    id: 20,
    name: "Heracross",
    img: require("../assets/images/pokemon/heracross.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/heracross/"
  },
  {
    id: 21,
    name: "Honchkrow",
    img: require("../assets/images/pokemon/honchkrow.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/honchkrow/"
  },
  {
    id: 22,
    name: "Houndoom",
    img: require("../assets/images/pokemon/houndoom.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/houndoom/"
  },
  {
    id: 23,
    name: "Ivysaur",
    img: require("../assets/images/pokemon/ivysaur.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/ivysaur/"
  },
  {
    id: 24,
    name: "Krookodile",
    img: require("../assets/images/pokemon/krookodile.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/krookodile/"
  },
  {
    id: 25,
    name: "Lugia",
    img: require("../assets/images/pokemon/lugia.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/lugia/"
  },
  {
    id: 26,
    name: "Luxray",
    img: require("../assets/images/pokemon/luxray.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/luxray/"
  },
  {
    id: 27,
    name: "Magmortar",
    img: require("../assets/images/pokemon/magmortar.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/magmortar/"
  },
  {
    id: 28,
    name: "Magnezone",
    img: require("../assets/images/pokemon/magnezone.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/magnezone/"
  },
  {
    id: 29,
    name: "Manectric",
    img: require("../assets/images/pokemon/manectric.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/manectric/"
  },
  {
    id: 30,
    name: "Mawile",
    img: require("../assets/images/pokemon/mawile.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/mawile/"
  },
  {
    id: 31,
    name: "Metagross",
    img: require("../assets/images/pokemon/metagross.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/mawile/"
  },
  {
    id: 32,
    name: "Mismagius",
    img: require("../assets/images/pokemon/mismagius.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/mismagius/"
  },
  {
    id: 33,
    name: "Musharna",
    img: require("../assets/images/pokemon/musharna.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/musharna/"
  },
  {
    id: 34,
    name: "Pikachu",
    img: require("../assets/images/pokemon/pikachu.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/pikachu/"
  },
  {
    id: 35,
    name: "Quilava",
    img: require("../assets/images/pokemon/quilava.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/quilava/"
  },
  {
    id: 36,
    name: "Regice",
    img: require("../assets/images/pokemon/regice.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/regice/"
  },
  {
    id: 37,
    name: "Salamence",
    img: require("../assets/images/pokemon/salamence.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/salamence/"
  },
  {
    id: 38,
    name: "Scizor",
    img: require("../assets/images/pokemon/scizor.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/scizor/"
  },
  {
    id: 39,
    name: "Slaking",
    img: require("../assets/images/pokemon/slaking.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/slaking/"
  },
  {
    id: 40,
    name: "Staraptor",
    img: require("../assets/images/pokemon/staraptor.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/staraptor/"
  },
  {
    id: 41,
    name: "Stoutland",
    img: require("../assets/images/pokemon/stoutland.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/stoutland/"
  },
  {
    id: 42,
    name: "Swampert",
    img: require("../assets/images/pokemon/swampert.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/swampert/"
  },
  {
    id: 43,
    name: "Talonflame",
    img: require("../assets/images/pokemon/talonflame.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/talonflame/"
  },
  {
    id: 44,
    name: "Torchic",
    img: require("../assets/images/pokemon/torchic.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/torchic/"
  },
  {
    id: 45,
    name: "Toxicroak",
    img: require("../assets/images/pokemon/toxicroak.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/toxicroak/"
  },
  {
    id: 46,
    name: "Tyranitar",
    img: require("../assets/images/pokemon/tyranitar.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/tyranitar/"
  },
  {
    id: 47,
    name: "Volcarona",
    img: require("../assets/images/pokemon/volcarona.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/volcarona/"
  },
  {
    id: 48,
    name: "Weavile",
    img: require("../assets/images/pokemon/weavile.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/weavile/"
  },
  {
    id: 49,
    name: "Whiscash",
    img: require("../assets/images/pokemon/whiscash.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/whiscash/"
  },
  {
    id: 50,
    name: "Xerneas",
    img: require("../assets/images/pokemon/xerneas.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/xerneas/"
  },
  {
    id: 51,
    name: "Zapdos",
    img: require("../assets/images/pokemon/zapdos.gif"),
    url: "https://pokeapi.co/api/v2/pokemon/zapdos/"
  }
];

export default pokemonList;
