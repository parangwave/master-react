import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

export default function User() {
  // string | undefined
  const { userId } = useParams();
  // console.log(userId);

  // console.log(useOutletContext()); // {darkmode: true}

  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* relative url: current url + this path  */}
      {/* "/followers" -> localhost:3000/followers */}
      <Link to={"followers"}>See Followers</Link>
      {/* render Followers */}
      <Outlet
        // when react-router render chilren here, plz context to children
        context={{
          nameOfUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
