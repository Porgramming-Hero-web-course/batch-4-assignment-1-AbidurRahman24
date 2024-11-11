{
    // type Person = { name: string, age: number };
    // type PersonKeys = keyof Person;
    function getProperty<T, K extends keyof T>(Person: T, key: K): T[K] {
        return Person[key];
      }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));       
}