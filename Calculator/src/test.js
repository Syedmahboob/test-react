function useState(n) {
  const x = n;

  function modiFyn() {
    // func to modify x
  }
  return [n, modiFyn];
}
let [name, setName] = useState("Syed");

let [state, setState] = useState("pass karo mere andar kuch bhi");

console.log(state);

setName = "rahul";
