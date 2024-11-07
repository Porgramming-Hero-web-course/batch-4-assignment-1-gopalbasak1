
# The significance of union and intersection types in Typescript.

Union and Intersection types are important features in TypeScript that help ensure type safety in your code.


## Union Types:

Union types allow a variable to be one of several possible types, denoted by the "|" symbol.



## Example
```bash
let userId: string | number;
userId = 'abc123'; 
userId = 456;
```


## Intersection Types: 

Intersection types combine multiple types into one, denoted by the "&" symbol.
## Example

```bash
interface User {
    name: string;
}

interface Admin {
    role: string;
}

let userAdmin: User & Admin = {
    name: 'John Doe',
    role: 'admin'
};
```