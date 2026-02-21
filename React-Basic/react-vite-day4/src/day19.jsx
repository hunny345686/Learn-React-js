import { use } from "react";
import { UserContext } from "./components/UserContext";
import { UserContextProvider } from "./components/UserContextProvider";

const Avtar = ({ isloading = true }) => {
  // const { user, setUser } = useContext(UserContext);

  /**
   * - if i m using use hook i can use it in any place in my component
   * - hooks roles will not work for it
   */
  {
    if (isloading) {
      return <div>Loading...</div>;
    }
  }
  const { user, setUser } = use(UserContext);

  const handleNameUpdate = () => {
    setUser({
      name: "Updated User Name",
    });
  };
  return (
    <div>
      <h2>Avtar "user" state used Hare</h2>
      <h2>Avtar Using Context {user.name}</h2>

      <button onClick={handleNameUpdate}>Update Name</button>
    </div>
  );
};
const Navigation = () => {
  return (
    <div>
      <h2>Navigation (State ↓ user)</h2>
      <Avtar />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h2>Header (State ↓ user)</h2>
      <Navigation />
    </div>
  );
};

const Day19 = () => {
  // const user = {
  //   name: "Prem",
  // };
  // ↑

  return (
    <UserContextProvider>
      <div>
        <h2>
          Day 19 = The Prop Drilling Problem (Context and useContext Hook)
          (State ↓ = user)
        </h2>
        <Header />
      </div>
    </UserContextProvider>
  );
};

export default Day19;
