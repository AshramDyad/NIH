/**
 * Google Map Component
 * Responsive Google Maps embed with proper accessibility
 */

import Link from "next/link";

export default function GoogleMap() {
    // Laxmi Nagar, Delhi - Correct embed URL format
    // Using Google Maps Embed format: /maps/embed?pb=
    const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56028.71761485281!2d77.269593!3d28.63591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35319b6a7ff%3A0x127dca80423ad527!2sLaxmi%20Nagar%2C%20Block%20S1%2C%20Nanakpura%2C%20Shakarpur%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1767001102797!5m2!1sen!2sin';

    return (
        <div className="w-full mt-8">
            <div className="bg-white rounded-2xl sm:p-6 p-4 shadow-md border border-zinc-100 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-secondary">
                        Find Us
                    </h3>
                    <p className="text-zinc-600">
                        Visit our office in Laxmi Nagar, Delhi. Click the map to get directions.
                    </p>
                </div>

                {/* Map Container with Responsive Aspect Ratio */}
                <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200">
                    <iframe
                        src={mapSrc}
                        title="National Institute of Holistic Health - Location Map"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="bg-zinc-100"
                    />
                </div>

                {/* Get Directions Link */}
                <Link
                    href="https://maps.app.goo.gl/PJnYrhQP7Qb6rj4u9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                    <span>Get Directions</span>
                </Link>
            </div>
        </div>
    );
}
