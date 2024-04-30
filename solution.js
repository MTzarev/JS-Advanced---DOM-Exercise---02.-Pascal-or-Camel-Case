function solve() {
  let text = (document.getElementById(`text`).value).split(` `);
  let convention = document.getElementById(`naming-convention`).value;
  let result = document.getElementById(`result`);
  let final = [];

  for (let i = 0; i < text.length; i++) {
    let word = text[i];

    if (convention.includes("Camel")) {
      if (i === 0) {
        word = word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
        final.push(word);
      } else if (i != 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        final.push(word);
      }
    } else if (convention.includes("Pascal")) {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      final.push(word);
    }
  }
  if (!convention.includes(`Camel`) && !convention.includes(`Pascal`)) {
    final.push(`Error!`);
  }

  result.textContent = final.join(``);
}