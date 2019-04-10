const pokemonList = [
  {
    id: 0,
    name: "Abomasnow",
    img: require("../assets/images/pokemon/abomasnow.gif")
  },
  {
    id: 1,
    name: "Archeops",
    img: require("../assets/images/pokemon/archeops.gif")
  },
  {
    id: 2,
    name: "Bayleef",
    img: require("../assets/images/pokemon/bayleef.gif")
  },
  {
    id: 3,
    name: "Blastoise",
    img: require("../assets/images/pokemon/blastoise.gif")
  },
  {
    id: 4,
    name: "Braviary",
    img: require("../assets/images/pokemon/braviary.gif")
  },
  {
    id: 5,
    name: "Cacturne",
    img: require("../assets/images/pokemon/cacturne.gif")
  },
  {
    id: 6,
    name: "Carracosta",
    img: require("../assets/images/pokemon/carracosta.gif")
  },
  {
    id: 7,
    name: "Darmanitan",
    img: require("../assets/images/pokemon/darmanitan.gif")
  },
  {
    id: 8,
    name: "Dragonite",
    img: require("../assets/images/pokemon/dragonite.gif")
  },
  {
    id: 9,
    name: "Electivire",
    img: require("../assets/images/pokemon/electivire.gif")
  },
  {
    id: 10,
    name: "Escavalier",
    img: require("../assets/images/pokemon/escavalier.gif")
  },
  {
    id: 11,
    name: "Feraligatr",
    img: require("../assets/images/pokemon/feraligatr.gif")
  },
  {
    id: 12,
    name: "Flygon",
    img: require("../assets/images/pokemon/flygon.gif")
  },
  {
    id: 13,
    name: "Galvantula",
    img: require("../assets/images/pokemon/galvantula.gif")
  },
  {
    id: 14,
    name: "Gardevoir",
    img: require("../assets/images/pokemon/gardevoir.gif")
  },
  {
    id: 15,
    name: "Genesect",
    img: require("../assets/images/pokemon/genesect.gif")
  },
  {
    id: 16,
    name: "Gigalith",
    img: require("../assets/images/pokemon/gigalith.gif")
  },
  {
    id: 17,
    name: "Golduck",
    img: require("../assets/images/pokemon/golduck.gif")
  },
  {
    id: 18,
    name: "Golem",
    img: require("../assets/images/pokemon/golem.gif")
  },
  {
    id: 19,
    name: "Grovyle",
    img: require("../assets/images/pokemon/grovyle.gif")
  },
  {
    id: 20,
    name: "Gyarados",
    img: require("../assets/images/pokemon/gyarados.gif")
  },
  {
    id: 21,
    name: "Heracross",
    img: require("../assets/images/pokemon/heracross.gif")
  },
  {
    id: 22,
    name: "Honchkrow",
    img: require("../assets/images/pokemon/honchkrow.gif")
  },
  {
    id: 23,
    name: "Houndoom",
    img: require("../assets/images/pokemon/houndoom.gif")
  },
  {
    id: 24,
    name: "Ivysaur",
    img: require("../assets/images/pokemon/ivysaur.gif")
  },
  {
    id: 25,
    name: "Krookodile",
    img: require("../assets/images/pokemon/krookodile.gif")
  },
  {
    id: 26,
    name: "Lugia",
    img: require("../assets/images/pokemon/lugia.gif")
  },
  {
    id: 27,
    name: "Luxray",
    img: require("../assets/images/pokemon/luxray.gif")
  },
  {
    id: 28,
    name: "Magmortar",
    img: require("../assets/images/pokemon/magmortar.gif")
  },
  {
    id: 29,
    name: "Magnezone",
    img: require("../assets/images/pokemon/magnezone.gif")
  },
  {
    id: 30,
    name: "Manectric",
    img: require("../assets/images/pokemon/manectric.gif")
  },
  {
    id: 31,
    name: "Mawile",
    img: require("../assets/images/pokemon/mawile.gif")
  },
  {
    id: 32,
    name: "Metagross",
    img: require("../assets/images/pokemon/metagross.gif")
  },
  {
    id: 33,
    name: "Mismagius",
    img: require("../assets/images/pokemon/mismagius.gif")
  },
  {
    id: 34,
    name: "Musharna",
    img: require("../assets/images/pokemon/musharna.gif")
  },
  {
    id: 35,
    name: "Pikachu",
    img: require("../assets/images/pokemon/pikachu.gif")
  },
  {
    id: 36,
    name: "Quilava",
    img: require("../assets/images/pokemon/quilava.gif")
  },
  {
    id: 37,
    name: "Regice",
    img: require("../assets/images/pokemon/regice.gif")
  },
  {
    id: 38,
    name: "Salamence",
    img: require("../assets/images/pokemon/salamence.gif")
  },
  {
    id: 39,
    name: "Scizor",
    img: require("../assets/images/pokemon/scizor.gif")
  },
  {
    id: 40,
    name: "Slaking",
    img: require("../assets/images/pokemon/slaking.gif")
  },
  {
    id: 41,
    name: "Staraptor",
    img: require("../assets/images/pokemon/staraptor.gif")
  },
  {
    id: 42,
    name: "Stoutland",
    img: require("../assets/images/pokemon/stoutland.gif")
  },
  {
    id: 43,
    name: "Swampert",
    img: require("../assets/images/pokemon/swampert.gif")
  },
  {
    id: 44,
    name: "Talonflame",
    img: require("../assets/images/pokemon/talonflame.gif")
  },
  {
    id: 45,
    name: "Torchic",
    img: require("../assets/images/pokemon/torchic.gif")
  },
  {
    id: 46,
    name: "Toxicroak",
    img: require("../assets/images/pokemon/toxicroak.gif")
  },
  {
    id: 47,
    name: "Tyranitar",
    img: require("../assets/images/pokemon/tyranitar.gif")
  },
  {
    id: 48,
    name: "Volcarona",
    img: require("../assets/images/pokemon/volcarona.gif")
  },
  {
    id: 49,
    name: "Weavile",
    img: require("../assets/images/pokemon/weavile.gif")
  },
  {
    id: 50,
    name: "Whiscash",
    img: require("../assets/images/pokemon/whiscash.gif")
  },
  {
    id: 51,
    name: "Xerneas",
    img: require("../assets/images/pokemon/xerneas.gif")
  },
  {
    id: 52,
    name: "Zapdos",
    img: require("../assets/images/pokemon/zapdos.gif")
  }
];

export default pokemonList;
