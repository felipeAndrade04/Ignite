import { withSSRAuth } from "../utils/withSSRAuth";
import { setupAPIClient } from "../services/api";

import styles from "../../styles/Home.module.css";

export default function Dashboard() {
  return (
    <div className={styles.main}>
      <h1>Metrics</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
