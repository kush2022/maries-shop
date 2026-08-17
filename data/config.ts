export const siteConfig = {
  brand: "Marie's",
  tagline: "Natural beauty, gently made.",
  // Edit this if the number changes. Used to build WhatsApp order links
  phoneDisplay: "0741 599 691",
  phoneWhatsApp: "254741599691", // international format, no leading 0 or +
  instagram: "maries_skincare_products", // optional; add handle to show in footer
  storageNote: "Store in a cool, dry place away from direct sunlight.",
};

export type WaProduct = {
  name: string;
  price: string;
};

export function waLink(product?: WaProduct) {
  const base = `https://wa.me/${siteConfig.phoneWhatsApp}`;
  const msg = product
    ? `Hi Marie's, I'd like to order the ${product.name} (${product.price}).`
    : `Hi Marie's, I'd like to place an order.`;
  return `${base}?text=${encodeURIComponent(msg)}`;
}
