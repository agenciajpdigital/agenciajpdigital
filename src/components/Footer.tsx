import logo from "@/assets/logo-jp-digital.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JP Digital" className="h-7 w-auto" />
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agência JP Digital
            </span>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right space-y-1">
            <p>Rua Einstein, 2322 – Fortaleza – CE</p>
            <p>WhatsApp: (85) 99211-3249</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
