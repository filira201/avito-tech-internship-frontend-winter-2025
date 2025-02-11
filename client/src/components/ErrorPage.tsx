import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Что-то пошло не так {error.status}</h1>
        <p>Ошибка: {error.statusText}</p>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }
};

export default ErrorPage;
