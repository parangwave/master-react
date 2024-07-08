import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "./api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 450px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;

  span:first-child {
    margin-bottom: 10px;
  }

  span:last-child {
    font-size: 25px;
    font-weight: 600;
    padding: 5px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    span:last-child {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  font-weight: ${(props) => (props.isActive ? 600 : 500)};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};

  a {
    display: block;
  }
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

// interface ITags {
//   id: string;
//   name: string;
//   coin_counter: number;
//   ico_counter: number;
// }

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  // tags: ITags[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface ITickersData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface ICoinProps {
  isDark: boolean;
}

export default function Coin({ isDark }: ICoinProps) {
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ITickersData>(["tickers", coinId], () => fetchCoinTickers(coinId));

  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<IInfoData>();
  // const [tickersData, settickersData] = useState<ITickersData>();
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     // console.log(infoData);
  //     // console.log(priceData);

  //     setInfo(infoData);
  //     settickersData(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);
  // // [] warning: useEffect tells "coinId loses Dependency"

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Title>
          {/* loading ? "Loading..." : info?.name -> unless coming from / */}
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span className="rank">#{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source</span>
              <span>{infoData?.open_source ? "YES" : "NO"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart isDark={isDark} coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
