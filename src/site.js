const Data = {
    start: [
        "Sorry I can't come",
        "Please forgive my absece",
        "This is going to sound crazy but",
        "Git this:",
        "I can't go because",
        "I know you're going to hate me but",
        "I was minding my own business and boom!",
        "I feel terrible but",
        "I regretfully cannot attend,",
        "This is going to sound like an excuse but"
    ],
    middle: [
        "my nephew",
        "the ghost of Hitler",
        "the Pope",
        "my ex",
        "a high school marching band",
        "Dan Rather",
        "a sad clown",
        "the kid from Air Bud",
        "a professional cricket team",
        "my Tinder data"
    ],
    end: [
        "just shit the bed",
        "died in front of me",
        "won't stop telling me knock knock jokes",
        "is having a nervous breakdown",
        "gave me syphilis",
        "poured lemonade in my gas tank",
        "stabbed me",
        "found my box of human teeth",
        "stole my bicycle",
        "posted my nudes on Instagram"
    ]
}
const Functions = {
    random: (list) => {
        const index = Math.floor(Math.random() * list.length)
        return list[index]
    },
    generate: () => {
        return Functions.random(Data.start) + " " + Functions.random(Data.middle) + " " + Functions.random(Data.end)
    }
}

$(() => {
    $("#content").html(Functions.generate())
})