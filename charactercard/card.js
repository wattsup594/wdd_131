const character = {
    name: "Snortleblat",
    class: "Swamp Guardian",
    level: 1,
    health: 100,
    image: "images/snortleblat.png",

    attacked() {
        this.health -= 20;

        if(this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died`);
        }

        renderCharacter();
    },

    levelUp() {
        this.level++;
        renderCharacter();
    }
};

function renderCharacter() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
}

document
    .getElementById("attackBtn")
    .addEventListener("click", () => {
        character.attacked();
    });

document
    .getElementById("levelBtn")
    .addEventListener("click", () => {
        character.levelUp();
    });

renderCharacter();