import { waLink, type WaProduct } from "@/data/config";

export default function WhatsAppOrderButton({
  product,
  className = "",
}: {
  product?: WaProduct;
  className?: string;
}) {
  return (
    <a
      href={waLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 font-sans text-sm font-semibold text-blush transition hover:bg-moss-light ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.15L2 22l5.09-1.53a9.9 9.9 0 0 0 4.95 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.16c-.24.68-1.4 1.31-1.93 1.36-.5.06-1.02.26-3.41-.71-2.88-1.18-4.73-4.07-4.87-4.26-.14-.19-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.02-2.4.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.04 1.3 2.34 1.44.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.75-.17 1.42z" />
      </svg>
      Order {product ? `${product.name} ` : ""}on WhatsApp
    </a>
  );
}
