import React from "react";
import styles from "./LayoutIndex.module.css";


function IndexRouter() {
    const { isAuth } = useSelector((state) => state.auth);
    return (
      <div className={styles.body}>
        <LoginRoutes />
      </div>
    );
  }
  
  export default IndexRouter;