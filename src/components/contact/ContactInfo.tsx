/**
 * Contact Info Component
 * Displays contact information with icons
 */

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Globe,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin size={20} />,
      title: "Address",
      content: "Laxmi Nagar, Delhi-110092, India",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: (
        <div className="flex flex-col gap-1">
          <Link
            href="tel:+919953882605"
            className="hover:text-primary transition-colors"
          >
            +91 9953882605
          </Link>
          <Link
            href="tel:+919311817707"
            className="hover:text-primary transition-colors"
          >
            +91 9311817707
          </Link>
        </div>
      ),
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: (
        <Link
          href="mailto:delhinih@gmail.com"
          className="hover:text-primary transition-colors"
        >
          delhinih@gmail.com
        </Link>
      ),
    },
    {
      icon: <Clock size={20} />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Response Time",
      content: "We typically respond within 24-48 business hours",
    },
    {
      icon: <Globe size={20} />,
      title: "Social Media",
      content: (
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61568351847847"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/nih_delhi/"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/delhinih"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://www.youtube.com/@delhinih"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="mb-4 space-y-2">
        <h3 className="text-2xl font-black text-secondary">
          Contact Information
        </h3>
        <p className="text-zinc-600">
          Feel free to reach out to us using any of the following methods.
        </p>
      </div>

      {/* Contact Details */}
      {contactDetails.map((detail) => (
        <div
          key={detail.title}
          className="bg-white rounded-2xl lg:p-6 p-4 shadow-sm border text-lg border-zinc-100 transition-shadow duration-300"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <div className="text-primary">{detail.icon}</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">
                {detail.title}
              </h4>
              <div className="text-lg font-semibold text-secondary break-all sm:break-normal">
                {detail.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
