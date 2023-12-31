document.getElementById("submit").addEventListener("click", addHero);

let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];


// Функция, которая отображает героев на странице

function displayHeroes()  {
    // Достаём контейнер, в который будем добавлять новые карточки героев
  let heroesContainer = document.getElementById("heroesContainer");

    // Очищаем текущее содержимое
  heroesContainer.innerHTML = ''; 

    // С помощью цикла проходимся по массиву героев
    // (переменная i будет равняться индексу элемента в массиве)
  for (let i = 0; i < heroes.length; i++) {
        // Создаём элемент, в который будем добавлять информацию о герое
    let heroDiv = document.createElement("div");
    heroDiv.className = "hero-card";

        // Записываем в созданный элемент разметку, подставляя необходимые данные

        // Так как элемент массива heroes[i] и есть массив - hero = ["имя", "класс"],
        // нужно взять отдельно имя и класс по индексу массива: [0]- имя [1]- класс
    heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;

        // Добавляем карточку героя в контейнер
    heroesContainer.appendChild(heroDiv);
  }
}

function addHero() {
    /* Ищем поля ввода */
    let nameInput = document.getElementById("heroName");
    let classInput = document.getElementById("heroClass");

    // Создаём массив с новым персонажем
    let newHero = [nameInput.value, classInput.value];
    
    // Кидаем нового персонажа в массив с героями на нашем сайте
    heroes.push(newHero);
    
    // Используем функцию, которую мы подготовили в прошлом уроке, 
    // чтобы обновить список героев на странице 
    displayHeroes();

    // Очищаем поля ввода, чтобы пользователю было удобнее 
    // сразу иметь возможность вводить данные нового персонажа 
    nameInput.value = "";
    classInput.value = "";
}




