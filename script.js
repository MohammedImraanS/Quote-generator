const quotes = [
  "🔥 \"Push yourself, because no one else will.\"",
  "🎯 \"Believe you can, and you're halfway there.\"",
  "🚀 \"Dream big. Work hard. Make it happen.\"",
  "💪 \"You are stronger than you think.\"",
  "🌟 \"Success is built on daily effort, not luck.\"",
  "🧗 \"Doubt kills more dreams than failure ever will.\"",
  "⚡ \"Wake up with determination. Sleep with satisfaction.\"",
  "📈 \"Great things never come from comfort zones.\"",
  "🥇 \"Discipline beats motivation every time.\"",
  "⏳ \"The best time to start was yesterday. The next best time is now.\"",

  "🌊 \"Let go of what you can't control.\"",
  "🧠 \"Your thoughts shape your reality.\"",
  "⛅ \"Not every day is good, but there’s good in every day.\"",
  "🕊 \"Peace comes from within, not from around you.\"",
  "🌍 \"Everyone is fighting a battle you can't see.\"",
  "📖 \"Life teaches through pain, not comfort.\"",
  "🔁 \"Nothing changes if nothing changes.\"",
  "🍂 \"Some people are lessons. Some are blessings.\"",
  "🪞 \"You attract what you are, not what you want.\"",
  "🎭 \"The truth is rarely loud, but always right.\"",

  "💫 \"You are allowed to be both a masterpiece and a work in progress.\"",
  "🌈 \"Happiness is homemade.\"",
  "🎨 \"Your vibe attracts your tribe.\"",
  "💐 \"Kindness is always in style.\"",
  "🧘 \"A calm mind is a powerful mind.\"",
  "🌻 \"Choose joy. Every single time.\"",
  "🎉 \"Celebrate small wins. They matter.\"",
  "🌞 \"Your energy introduces you before you speak.\"",
  "🪄 \"Magic happens when you don’t give up.\"",
  "❤ \"Love yourself first, and everything else aligns.\""
];

function generateQuote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);

    document.getElementById("quote").textContent=quotes[randomIndex];
}