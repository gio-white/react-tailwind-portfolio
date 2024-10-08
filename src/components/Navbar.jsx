import { links } from "../data"

const Navbar = () => {
  return (
    <nav className="bg-blue-200">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-blue-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link)=>{
            const {id,href,text}= link
            return <a className="capitalize text-lg tracking-wide hover:text-blue-700 duration-300" key={id} href={href}>{text}</a>
          })}
        </div>
      </div>
    </nav>
  )
}
export default Navbar