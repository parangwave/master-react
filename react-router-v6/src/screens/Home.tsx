import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams); // URLSearchParams (js class that has utility methods)
  // console.log(readSearchParams.has("geo")); // true
  // console.log(readSearchParams.get("geo")); // 123

  // modify url programmatically
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  // http://localhost:3000/?day=today&tomorrow=123

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
