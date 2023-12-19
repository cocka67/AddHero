document.getElementById("submit").addEventListener("click", addHero);

let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];
let heroNames = ["Axe", "Crystal Maiden"]
let heroClasses = ["Tank", "Support"]

let newHeroName = nameInput.value;
let newHeroClass = heroClass.value;

let heroesContainer = document.getElementById("heroesContainer");
// Находим поле ввода
let nameInput = document.getElementById("heroName");
// Значение поля ввода хранится в value — и его можно достать таким образом:
console.log(nameInput.value);

let heroClass = document.getElementById("heroClass");
console.log(heroClass.value);


// Функция, которая отображает героев на странице

function displayHeroes() {
    // Достаём контейнер, в который будем добавлять новые карточки героев
    let heroesContainer = document.getElementById("heroesContainer");

    // Очищаем текущее содержимое
    heroesContainer.innerHTML = '';

    // С помощью цикла проходимся по массиву имён героев
    // (переменная i будет равняться индексу элемента в массиве)
    for (let i = 0; i < heroNames.length; i++) {
        // Создаём элемент, в который будем добавлять информацию о герое
        let heroDiv = document.createElement("div");
        heroDiv.className = "hero-card";

        // Записываем в созданный элемент разметку, подставляя необходимые данные
        // (данные достаём из массивов по индексу – если не помнишь, как это делать,
        // перечитай наш урок про массивы)
        heroDiv.innerHTML = `<h3>${heroNames[i]}</h3><p>${heroClasses[i]}</p>`;

        // Добавляем карточку героя в контейнер
        heroesContainer.appendChild(heroDiv);
    }
}

function addHero() {
    /* Ищем поля ввода */
    let nameInput = document.getElementById("heroName");
    let classInput = document.getElementById("heroClass");

    /* Кидаем новые данные из инпутов в массивы с именами и классами */
    heroNames.push(nameInput.value);
    heroClasses.push(classInput.value);

    /* 
        Используем функцию, которую мы подготовили в прошлом уроке, 
        чтобы обновить список героев на странице 
    */
    displayHeroes();

    nameInput.value = "";
    classInput.value = "";
}




