// import { useParams } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfUser: string;
}

export default function Followers() {
  // What if there's important data you want to share w/ User, Followers screens?

  // 1. useParams()
  // const { userId } = useParams();
  // console.log(userId);

  // 2. communicate w/ chilren route = useOutletContext

  const { nameOfUser } = useOutletContext<FollowersContext>();

  return <h1>Here are {nameOfUser}'s followers</h1>;
}
