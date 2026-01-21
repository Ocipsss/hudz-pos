// nanoid.js - Versi Global untuk Browser
window.nanoid = (size = 21) => {
  let alphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  for (let i = 0; i < size; i++) {
    id += alphabet[63 & bytes[i]];
  }
  return id;
};
