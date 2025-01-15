export function decodeEmail(obfuscatedEmail) {
  return obfuscatedEmail.replace(/\[dot\]/g, ".").replace(/\[at\]/g, "@");
}
