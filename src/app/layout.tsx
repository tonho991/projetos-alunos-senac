export const metadata = {
  title: 'Projetos Senac Alunos',
  description: 'A turma Front-End do SENAC (2023.29.6) é composta por alunos talentosos e apaixonados por tecnologia. Cada um deles possui habilidades únicas em programação, design, e desenvolvimento web, e estão sempre em busca de novos desafios para aprimorar seus conhecimentos. Ao longo do curso, os alunos desenvolveram projetos, com objetivos claros, metodologias bem estruturadas e resultados surpreendentes. Eles enfrentaram desafios, encontraram soluções criativas e aprenderam lições valiosas ao longo do processo.',
  openGraph: {
    images: ["https://projetos-alunos-senac.vercel.app/alunos_photo.jpeg"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
