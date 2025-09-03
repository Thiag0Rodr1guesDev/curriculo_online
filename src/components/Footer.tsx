import { Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Bottom Bar */}
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">© {currentYear} Portfolio. All rights reserved.</p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                Made with <Coffee className="h-4 w-4 text-accent" /> using React with TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
