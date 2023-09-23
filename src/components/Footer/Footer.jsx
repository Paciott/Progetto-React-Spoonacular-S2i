import reactLogo from '../../assets/svg/react_logo.svg';
import viteLogo from '../../assets/svg/vite_logo.svg';
import tailwindLogo from '../../assets/svg/tailwind_logo.svg';

function Footer() {
// component render
return (
  <>
    <div className="p-3 bg-cream text-center">
      <p className="text-lg">Developed with ❤️ by <a href="https://github.com/Paciott" target="_blank" className="italic hover:underline">Andrea Pacitto</a></p>
      <p className="text-sm tracking-widest">Made with 
      <a href="https://vitejs.dev/" target="_blank"><img src={viteLogo} className="inline h-6 w-6" alt="vite logo" /></a>  
      <a href="https://react.dev/" target="_blank"><img src={reactLogo} className="inline h-6 w-6" alt="react logo" /></a>  
      <a href="https://tailwindcss.com/" target="_blank"><img src={tailwindLogo} className="inline h-6 w-6" alt="tailwind logo" /></a></p>

    </div>
  </>
)
}

export default Footer;