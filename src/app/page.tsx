import Image from 'next/image'
import "../../styles/globals.css";
import HomeStyle from "../../styles/home.module.css"

export default function Home() {
  return <HomePage />
}

function HomePage() {
  const NavBar = () => {
    return (
      <div>
        <div className={HomeStyle.top}>
          <img src="https://www.ba.senac.br/assets/template/images/senac_logo_branco.png" alt="Senac Logo" />
          <h1>Repositorios Alunos Senac</h1>
        </div>
      </div>

    )
  }

  return (
    <div>
      <NavBar />
      <div className={HomeStyle.content}>
          <p>
            A turma Front-End do <strong>SENAC</strong> é composta por alunos talentosos e apaixonados e apaixonados por tecnologia. Cada um deles possui habilidades únicas em programação, design, e desenvolvimento web, e estão sempre em busca de novos desafios para aprimorar seus conhecimentos.<br />
            Ao longo do curso, os alunos desenvolveram projetos, com objetivos claros, metodologias bem estruturadas e resultados surpreendentes. Eles enfrentaram desafios, encontraram soluções criativas e aprenderam lições valiosas ao longo do processo.
          </p>
          <img src="https://iili.io/JCGyYAJ.png" alt="" />
        </div>
    </div>
  )
}
