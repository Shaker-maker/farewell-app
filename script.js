const message = `
I don’t say this often, but I will miss you—genuinely.  
You’ve felt like a mother to me here.  
The kind that doesn’t hover, but somehow makes the space feel lighter… safer.

As Anna Taylor said:  
‘Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them.’

You’ve been more than just a colleague — you’ve been a mentor, a friend, and someone I’ve deeply looked up to.

In every conversation, you brought clarity.  
In every challenge, you offered guidance.  
And in every ordinary day, you made work feel lighter.

Your encouragement and belief in me have meant more than I can say.  
Thank you for always reminding me to push forward, to grow, and to take that extra mile.

As you move on to the next chapter, I hope you know how much impact you’ve had — not just on the work, but on people.  
On me.

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

window.onload = () => {
  const startScreen = document.getElementById('start-screen');
  const audio = document.getElementById('background-music');

  startScreen.addEventListener('click', () => {
    startScreen.style.display = 'none';
    document.querySelector('.overlay').style.display = 'block';
    audio.muted = false;
    audio.play().catch(() => {}); // in case autoplay gets blocked
    typeText();
  });
};
