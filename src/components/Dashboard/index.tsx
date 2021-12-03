import { Container } from "./styles";
import profile from "../../assets/raquel.jpeg";

export function Dashboard() {
  return (
    <Container>
      <div className="card">

        <div className="profile">
          <img src={profile} alt="Raquel Izidório" />
        </div>
        <div className="info">
          <h2>Raquel Izidório Leonaldo</h2>
          <p>
            Sou estudante de Sistema de Informação no UNIFOA . Aluna da
            Rocketseat do bootcamp LaunchBase/ Ignite. Apaixonada pelo
            desenvolvimento front end, estudando as seguintes tecnologias: HTML,
            CSS, JavaScript, TypeScript e ReactJs. <p>Buscando minha primeira oportunidade.</p>
            <p>🚧Dev em construção🚧</p>
          </p>
        </div>
        
      </div>
    </Container>
  );
}
