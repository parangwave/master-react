import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 16px;

  a {
    padding: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
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

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinsProps {
  toggleTheme: () => void;
}

export default function Coins({ toggleTheme }: ICoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>Coins&nbsp;</Title>
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
      </Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  // when open this page && transferred w/ click,
                  // send state(or string, obj) to other screens
                  state: { name: coin.name }, // no effect when screen trasition
                }}
              >
                <Img
                  // src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id.toLocaleLowerCase()}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
