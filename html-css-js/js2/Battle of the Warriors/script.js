const thor = {
    name: "Thor",
    hp: 100,
    strength: 56,
    attack() {
        return Math.floor(Math.random() * this.strength);
    },
};

const zeus = {
    name: "Zeus",
    hp: 100,
    strength: 67,
    attack() {
        return Math.floor(Math.random() * this.strength);
    },
};
console.log(thor);
console.log(zeus);
console.log(`${thor.name} vs ${zeus.name} - Battle Begins!`);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        if (thor.hp === 0 || zeus.hp === 0) return;
        console.log(`=== Round ${i + 1} ===`);
        let thordamage = thor.attack();
        let zeusdamage = zeus.attack();
        zeus.hp = Math.max(0, zeus.hp - thordamage);
        thor.hp = Math.max(0,  thor.hp - zeusdamage);

        console.log(`Thor attact Zeus and does ${thordamage} damage!`);
        console.log(`Zeus attack Thor and does ${zeusdamage} damage!`);
        console.log(`Thor HP: ${thor.hp} | Zeus HP: ${zeus.hp}\n`);

        if (thor.hp === 0 || zeus.hp === 0) {
            console.log("Battle Over!");

            if (thor.hp > zeus.hp) {
                console.log( "🏆" + thor.name + " WINS the battle! 🏆");
            } else if (zeus.hp > thor.hp) {
                console.log("🏆" + zeus.name + " WINS the battle! 🏆");
            } else {
                console.log("draw");
            }
        }
    }, i * 1000);
}