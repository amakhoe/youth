import Image from "next/image";
import logo from '@/assets/logo_monochromatic.png'
export const Navbar = () => {
    const NavLinks = [
  {label: "Home", href:"#"},
  {label: "sobre", href:"#"},
  {label: "servicos", href:"#"},
  {label: "conctatos", href:"#"}
];
    return (
      <div className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center">
          <div>
              <Image src={logo} alt="champier" className="h-9 w-auto ml-2"/>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium text-white">
              {NavLinks.map((link)=>(
                <a href="" key={link.label}>{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
           
            <button className="border h-12 rounded-full px-6 font-medium border-white text-white bg-transparent hidden md:inline-flex items-center">Login</button>
            <button className="border h-12 rounded-full px-6 font-medium bg-lime-400 text-neutral-950 border-lime-400 hidden md:inline-flex items-center">Login</button>
          </div>
        </div>
      </div>  
       </div> 
    
    )
}