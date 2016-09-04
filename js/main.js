var zodiac = [
	{
		sign: "aquarius",
		fortune: "You will get attracted to someone whom you meet for the first time. Try and find out more about the person before committing to any relationship. Your dominant personality acts as a positive force for you as well as for people close to you.",
		image: "img/aquarius.png"
	},
	{
		sign: "aries",
		fortune: "You will start or deepen a relationship with someone you are very close to. Your pleasing personality may entice the person to respond positively. Ensure that you don't make any mistakes.",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Avoid dishing out unsolicited advice or even ill-placed compliments. They might not be welcome. Your patience, tenacity, commitment and purposefulness will make it easier for you to deal with your problems as well as that of others.",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Your nervousness will prevent you from using your ability to experiment. You will do well to depend on someone you can trust. You get a kick out of working non-stop. Your hard work will be suitably rewarded.",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Your dominant personality acts as a positive force for you as well as for people close to you. They come to you to seek guidance, protection and support. You will do good unto them.",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortune: "You will be easily agitated this week. You will lack the energy and drive to be your usual charming self. You like constant change and the challenges that come with it. You thrive on it.",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Your kids require the attention and care of a father. You have been neglecting your duties to them. You've been very busy with your schedule. Situations around you do not bore well for your future.",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortune: "All your efforts and the hard work you have put into your venture will start showing in the results. It's now time for you to reap the benefits of all that work you've done. Relax for now before you move ahead.",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Interact with your siblings with patience and complete awareness. Else things might just go wrong and out of hand without you realising it. Do not wallow in self-pity or worry about your future.",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "You will succeed in whatever career you choose. It's your persistence, drive, zeal and patience that helps you achieve anything you set out to do. Your nature to keep silent and proper advice or opinion only when asked for brings you much acceptance and recognition.",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "You get a kick out of working non-stop. Your hard work will be suitably rewarded. You also require to give your body and mind some rest. The impression that you are unreliable, irresponsible and lack of commitment is not good for your career.",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "You get a kick out of working non-stop. Your hard work will be suitably rewarded. You also require to give your body and mind some rest. You will have novel ideas for the project you are working on but it requires the support of your colleagues to ensure successful implementation.",
		image: "img/virgo.png"
	}
]

function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "You're Horoscope says: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "Please type correctly!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}