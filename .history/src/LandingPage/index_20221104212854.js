import './style.css';

export default function Barbearia() {
  return (
    <body>
        <header id="topo" className='limitar-secao modo-claro'>
          <div className='logo'>  
            <img src="../../assets/barbearia-logo.png" alt="logo-barbearia" title="logo da barbearia"/>
          </div>
          <div className='botao'>  
            <img src="../../assets/moon.png" alt="alternar-modo" title="alternar-modo"/>
            <span>Dark</span>
          </div>
        </header>
        <section id="secao-banner" className='limitar-secao'>
            
        </section>
        <section id="secao-texto">
            <h1>Bem-vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <p>S. Kelly</p>
        </section>
    </body>
  )
}