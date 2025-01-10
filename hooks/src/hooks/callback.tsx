import { useCallback } from "react";

const CallBackHook = () => {
  const formHandler = useCallback(() => {}, []);

  <form action="">
    <button onSubmit={formHandler}></button>
  </form>;
};

export default CallBackHook;
