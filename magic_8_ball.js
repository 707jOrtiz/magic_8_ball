function eightBall() {
    var num = Math.floor(Math.random() * 8)
    switch (num) {
        case 1:
            return "It is decidedly so."

        case 2:
            return "Reply hazy, try again."
            
        case 3:
            return "Outlook not so good."
            
        case 4:
            return "Signs point to yes."
            
        case 5:
            return "Cannot predict now."
            
        case 6:
            return "Yes definitely."
            
        case 7:
            return "My sources say no."
            
        case 8:
            return "It is certain."

    }
}


console.log(eightBall())

