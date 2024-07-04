import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

export default function Coin() {
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<RouteParams>();
  console.log(coinId);

  return <h1>Coin: {coinId}</h1>;
}
