import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Properties", href: "/properties" },
      { label: "Chat Assistant", href: "/chat" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">RentIQ</h2>
          <p className="text-sm text-gray-400">
            Smart real estate solutions powered by AI. Buy, rent, or build with confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} RentIQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
