#### Data fetching met AXIOS stappenplan

1. [x] HTML, CSS en JS files maken.
2. [x] CSS en JavaScript file linken.
3. [x] NPM init.
4. [x] git init (zorg wel voor een git repository)
5. [x] .gitignore maken.
6. [x] AXIOS installeren. _(library)_
7. [x] AXIOS script linken.
8. [x] Een async function maken en **aanroepen**!
9. [x] Request maken met AXIOS.
    - [x] Try / catch maken.
10. [x] Afwachten tot de data er is.
11. [x] Data weergeven in de DOM.
    - [ ] Lijst maken met een id.
    - [ ] Lijst selecteren.
    - [ ] Voor elke element in de array.
        - [x] Een li aanmaken.
        - [x] textContent toevoegen.
        - [x] li appenden.

#### De vorige entry verwijderen zodra je een nieuwe opdracht intoetst. 

Kan op verschillende manieren. In een functie die je buiten een functie zet en die je aanroept binnen de functie van de app.
```js
function removeChilderen(node) {
    while (node.firstChild) {
    node.removeChild(node.lastChild)
    }
}
removeChilderen("Naam html id-element");
```

Of onderste while statement die je in de functie zet.
```js
while (displayFlag.firstChild) {
    displayFlag.removeChild(displayFlag.lastChild)
}

while (displayCountryText.firstChild) {
    displayCountryText.removeChild(displayCountryText.lastChild)
}
```

Of met id-html-element.innerHTML op "" leeg zetten in de functie
```js
displayFlag.innerHTML = "";
displayCountryText.innerHTML = "";
```


