import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text='code and coffee'/>
          <p className="text-slate-600 mt-8 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur distinctio beatae ipsa rerum porro. Repudiandae atque totam facere. Adipisci, numquam voluptates placeat quos totam optio ad assumenda! Laboriosam reiciendis alias adipisci dolor necessitatibus beatae. Unde id, mollitia distinctio molestias optio at iure in esse nesciunt. Sapiente, asperiores esse ipsam reiciendis voluptatum amet molestiae. Quo iure quod neque, itaque excepturi, asperiores architecto reiciendis amet dolor repellendus ratione! Obcaecati, soluta dolores minus totam doloremque eius tempora libero velit blanditiis hic maxime odio eligendi in beatae earum distinctio! Ex sequi corrupti quasi doloremque facere, animi, enim ratione commodi veniam quo aliquam maiores illo dolore? </p>
        </article>
      </div>
    </section>
  )
}
export default About