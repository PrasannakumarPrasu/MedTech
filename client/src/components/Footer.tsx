import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <h3 className="font-serif font-bold text-xl">MedEasy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for affordable generic medicines across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center" data-testid="link-facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center" data-testid="link-twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center" data-testid="link-instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center" data-testid="link-whatsapp">
                <SiWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-how-it-works">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-prescription">Prescription Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-return">Return Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-diabetes">Diabetes Care</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-cardiac">Cardiac Care</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-vitamins">Vitamins</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-baby-care">Baby Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">support@medeasy.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MedEasy. All rights reserved. | License No: DL-XXX-YYYY
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
