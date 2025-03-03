const character = {
    name: "Hero",
    health: 100,
    class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"],
    specilaAbility:["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"], 
    randomizeHealth(){
        this.health = Math.floor(Math.random()*(150 - 50 + 1) + 50);
    },
    battle(otherCharacter) {

        const damage = Math.floor(Math.random() * (20 - 5 + 1) + 5); // Random damage between 5 and 20
        const oldHealth = otherCharacter.health;
        otherCharacter.health = otherCharacter.health - damage

        console.log(
            `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility[Math.floor(Math.random() * this.specialAbility.length)]}. ` +
            `${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`
        );
    }
};
character.randomizeHealth();
console.log(character.health); // Should log a random value between 50 and 150

function generateCharacter (name){
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
    const specialAbilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

    const newcharacter = {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random()* classes.length)],
        specilaAbility: specialAbilities[Math.floor(Math.random() * specialAbilities.length)],
        health: 100,

        randomizeHealth() {
            this.health = Math.floor(Math.random() * (150 - 50 + 1) + 50);
        },

        battle(otherCharacter) {

            const damage = Math.floor(Math.random() * (20 - 5 + 1) + 5);
            const oldHealth = otherCharacter.health;
            otherCharacter.health = otherCharacter.health - damage;

            console.log(
                `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ` +
                `${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`
            );
        }
    };
    newcharacter.randomizeHealth();
        return newcharacter;

}

const randomCharacter = generateCharacter();
console.dir(randomCharacter);  // Logs a character with random attributes

const namedCharacter = generateCharacter("Drake");
console.dir(namedCharacter);  // Logs a character named "Drake"

const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2); 

function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

// Example usage:
const party = generateMultipleCharacters(5);
console.dir(party);

