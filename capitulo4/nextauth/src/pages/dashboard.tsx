import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";
import { setupAPIClient } from "../services/api";

import { Can } from "../components/Can";

import styles from "../../styles/Home.module.css";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className={styles.main}>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Can permissions={["metrics.list"]}>
        <h3>Métricas</h3>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
