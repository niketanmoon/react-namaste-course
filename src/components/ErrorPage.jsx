import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
