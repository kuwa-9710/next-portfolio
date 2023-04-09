import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tomoworks0941",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

const microCMSLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w=${width}`
}