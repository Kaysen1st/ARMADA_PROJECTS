const thor = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack() {
        return Math.floor(Math.random() * this.strength + 1);
    },
};

const zeus = {
    name: "Zeus",
    hp: 100,
    strength: 10,
    attack() {
        return Math.floor(Math.random() * this.strength + 1);
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
        thor.hp = Math.max(0, thor.hp - zeusdamage);

        console.log(`Thor attacks Zeus and does ${thordamage} damage!`);
        console.log(`Zeus attacks Thor and does ${zeusdamage} damage!`);
        console.log(`Thor HP: ${thor.hp} | Zeus HP: ${zeus.hp}\n`);

        if (thor.hp === 0 || zeus.hp === 0) {
            declareWinner();
        }

        if (i === 9) {
            declareWinner();
        }

        function declareWinner() {
            console.log("Battle Over!");

            if (thor.hp === zeus.hp) {
                console.log("It's a draw!");
            } else if (thor.hp > zeus.hp) {
                console.log("🏆 " + thor.name + " WINS the battle! 🏆");
            } else {
                console.log("🏆 " + zeus.name + " WINS the battle! 🏆");
            }
        }
    }, i * 1000);
}
