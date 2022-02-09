import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // console.log(error);
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
    // Pode registrar o erro em um serviço de relatórios de erro
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
