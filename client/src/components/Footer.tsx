import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 {APP_TITLE}. Todos os direitos reservados.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contato">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Contato
              </span>
            </Link>
            <Link href="/termos-lgpd">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Termos LGPD
              </span>
            </Link>
            <Link href="/sobre">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Sobre Nós
              </span>
            </Link>
            <Link href="/trabalhe-conosco">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Trabalhe Conosco
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
