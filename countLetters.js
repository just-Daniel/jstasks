//Порахувати букву яка найчастіше зустрічається в реченні 

const myText = text => {
    let lowerText = text.toLowerCase();
    let arrItems = lowerText.replace(/[^a-z]/g, '').split('');
    let map = {};
  
    arrItems.map(str => map[str] = !map[str] ? 1 : map[str] + 1);
    
  let count = [...Object.entries(map)].reduce((a, e ) => e[1] > a[1] ? e : a);
    return `Ви отримали букву "${count[0]}", вона повторюється ${count[1]} раз.`
}
  
console.log(myText("Amy normally hated Monday mornings, but this year was different."))

// RETURN: "Ви отримали букву "a", вона повторюється 6 раз."