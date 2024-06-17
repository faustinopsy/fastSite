import * as fabricar from "../../core/Fabrica.js";
import dadosCard from "../componentes/CardComponentes.js";

export default function fabricaCard() {
  const { card } = dadosCard;
  return fabricar.criarContainer(card);
}
