const message = `
I don’t say this often, but I will miss you—genuinely.
You’ve felt like a mother to me here.
The kind that doesn’t hover, but somehow makes the space feel lighter… safer.

As Anna Taylor said:
‘Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them.’

Thank you for being that person, Lydiah.
I really hope we stay in touch.
– Alvin.
`;

const el = document.getElementById('message');
let index = 0;

function typeText() {
  if (index < message.length) {
    el.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

window.onload = typeText;
