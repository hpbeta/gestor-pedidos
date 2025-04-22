import drink from "./../../assets/bebida.jpg";
import cachacaMineira from "./../../assets/cachaca-mineira.jpg";
import cafe from "./../../assets/cafe.jpg";
import caipirinha from "./../../assets/caipirinha.jpg";
import quentao from "./../../assets/quentao.jpg";
import cerveja from "./../../assets/cerveja.jpg";

const drinks = [
  {
    id: 1,
    image: drink,
    name: "Coca-Cola",
    description: "Refrigerante gelado 350ml",
  },
  {
    id: 2,
    image: cachacaMineira,
    name: "Cachaça Mineira",
    description:
      "A cachaça é a bebida mais emblemática de Minas Gerais. Produzida artesanalmente em alambiques, destaca-se pela pureza e sabor marcante, sendo apreciada pura ou como base para diversos coquetéis. ",
  },
  {
    id: 3,
    image: caipirinha,
    name: "Caipirinha",
    description:
      "A caipirinha é um coquetel clássico brasileiro feito com cachaça, limão, açúcar e gelo. Em Minas Gerais, é comum encontrar variações com frutas como morango, maracujá e tangerina.",
  },
  {
    id: 4,
    image: quentao,
    name: "Quentão",
    description:
      "Tradicional nas festas juninas, o quentão é uma bebida quente feita com cachaça, gengibre, açúcar e especiarias. É ideal para os dias frios típicos das montanhas mineiras. ",
  },
  {
    id: 5,
    image: cerveja,
    name: "Cerveja",
    description: "Cerveja",
  },
  {
    id: 6,
    image: cafe,
    name: "Café",
    description:
      "O café mineiro é conhecido por seu sabor forte e aroma intenso. Cultivado nas montanhas de Minas Gerais, é uma bebida essencial no cotidiano dos mineiros, sendo servido em diversas ocasiões. ",
  },
];

export default drinks;
