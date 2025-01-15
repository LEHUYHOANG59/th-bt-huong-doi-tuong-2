class Apple {
    constructor(weight = 10) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    speak(words) {
        console.log(this.name + ": " + words);
    }

    eatApple(apple) {
        if (apple.getWeight() > 0) {
            this.weight++;
            apple.weight--;
            this.speak("Yum, ăn một miếng táo!");
        } else {
            this.speak("Quả táo hết rồi!");
        }
    }

    checkAppleWeight(apple) {
        console.log("Khối lượng quả táo hiện tại là:", apple.getWeight());
    }
}

// Tạo quả táo và hai người
const apple = new Apple();
const adam = new Human("Adam", "Nam", 70);
const eve = new Human("Eva", "Nữ", 60);

// Adam và Eva ăn táo
adam.eatApple(apple);
eve.eatApple(apple);
adam.eatApple(apple);
eve.checkAppleWeight(apple);

// In thông tin
console.log(adam);
console.log(eve);
console.log(apple);