function Footer() {
return (
  <>
    <div className="p-3 bg-cream text-center">
      <p className="text-lg">Developed with ❤️ by <a href="https://github.com/Paciott" className="italic underline">Andrea Pacitto</a></p>
      <p className="text-sm tracking-widest">Made with 
      <a href="https://vitejs.dev/"><img src="../../src/assets/img/vite_logo.svg" className="inline h-6 w-6" alt="vite logo" /></a>  
      <a href="https://react.dev/"><img src="../../src/assets/img/react_logo.svg" className="inline h-6 w-6" alt="react logo" /></a>  
      <a href="https://tailwindcss.com/"><img src="../../src/assets/img/tailwind_logo.svg" className="inline h-6 w-6" alt="tailwind logo" /></a></p>

    </div>
  </>
)
}

export default Footer;