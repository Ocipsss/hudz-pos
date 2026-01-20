// lib/nanoid.js
(function() {
  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_Galyz90_quhjkVbfg567';
  
  window.nanoid = function(size = 10) {
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while (size--) {
      // Menggunakan bitwise AND 63 agar index tidak lebih dari 63
      id += urlAlphabet[bytes[size] & 63];
    }
    return id;
  };
})();
