import './style.css';

export default function Barbearia() {
  return (
    <div className='modo-escuro'>

        <header id="topo" >
          <div className='limitar-secao'>  
            <img className='logo' src="../../assets/barbearia-logo.png" alt="logo-barbearia" title="logo da barbearia"/>
            <button className='modo-escuro'>
              <img className="btn-icone" src="assets/sun.png" alt="alternar-modo" title="alternar-modo"/>
              <span>Dark</span>
            </button>
          </div>
        </header>

        <section id="secao-banner" className='limitar-secao'></section>

        <section id="secao-texto" className='limitar-secao secao-texto'>
            <div className='limitar-secao'>
              <h1>Bem-vindo a Barber Shop</h1>
              <p className='primeiro-paragrafo'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
              <p className='segundo-paragrafo'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
              <p className='assinatura'>S. Kelly</p>
            </div>
        </section>
    </div>
  )
}