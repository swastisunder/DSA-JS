### Object-Oriented Programming in JavaScript

#### **Classes**

A class is a blueprint or template that defines the structure and
behavior for objects. It outlines the properties (fields) and methods
that an object created from the class will have.

- **Example:**

  ```javascript
  class Car {
    // properties (attributes)
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }

    // Method (behavior)
    drive() {
      console.log(`${this.model} is driving`);
    }
  }
  ```

#### **Objects**

An object is an instance of a class. It has actual values for the
properties defined by the class and can perform the behaviors specified
by it.

- **Example:**

  ```javascript
  const myCar = new Car("Red", "Tesla");
  myCar.drive(); // Tesla is driving
  ```

---

### Access Modifiers

In JavaScript, access modifiers are not as strict as in Java. By
default, all properties and methods are **public**. But ES2022+
introduces **private fields** using the `#` symbol.

- **Public:** Accessible from anywhere.
- **Private:** Defined with `#`, accessible only inside the class.
- **Protected (not built-in):** Usually simulated using convention
  (e.g., `_name`).

**Example:**

```javascript
class Person {
  #ssn; // private field

  constructor(name, ssn) {
    this.name = name; // public
    this.#ssn = ssn; // private
  }

  getSSN() {
    return this.#ssn;
  }
}
```

---

### Getters and Setters

- **Setters:** Used to modify the value of a property of the current
  object.

- **Getters:** Used to return the value of a property.

- **`this` keyword:** Refers to the current object.

- **Example:**

  ```javascript
  class Person {
    constructor(name) {
      this._name = name;
    }

    // Getter
    get name() {
      return this._name;
    }

    // Setter
    set name(newName) {
      this._name = newName;
    }
  }

  const p = new Person("Hare");
  console.log(p.name); // Hare
  p.name = "John";
  console.log(p.name); // John
  ```

---

### Encapsulation

Encapsulation means wrapping data and methods into a single unit. It
hides data using private fields or closures and allows controlled
access.

```javascript
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
```

---

### Constructors

Constructors are special methods called automatically when creating an
object using `new`.\
They initialize properties of the object.

#### **Types of Constructors**

1.  **Default Constructor:** No parameters.
2.  **Parameterized Constructor:** Takes parameters to initialize
    properties.

**Example:**

```javascript
class Student {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student();
const s2 = new Student("Alice", 20);

console.log(s1); // Student { name: 'Unknown', age: 0 }
console.log(s2); // Student { name: 'Alice', age: 20 }
```

---

### Copying Objects

#### **Shallow Copy**

Copies only the references of nested objects (not a deep copy).

```javascript
const obj1 = { name: "Hare", address: { city: "Delhi" } };
const shallowCopy = { ...obj1 };
shallowCopy.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai (affected)
```

#### **Deep Copy**

Creates a full copy with separate memory.

```javascript
const obj2 = { name: "Hare", address: { city: "Delhi" } };
const deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.address.city = "Mumbai";

console.log(obj2.address.city); // Delhi (not affected)
```

---

### Destructors

JavaScript does **not** have destructors.\
Instead, it relies on **garbage collection** to automatically clean up
memory when objects are no longer referenced.

---

### Inheritance

Inheritance allows a class to inherit properties and methods from
another class using `extends`.

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks
```

#### **Types of Inheritance in JS**

1.  **Single Inheritance:** A class inherits from one class.
2.  **Multilevel Inheritance:** Class inherits from another class that
    already inherits a class.
3.  **Hierarchical Inheritance:** Multiple classes inherit from the same
    parent.

---

### Polymorphism

Polymorphism allows different classes to define methods with the same
name.

#### **Compile-time Polymorphism (Method Overloading)**

Not directly supported in JS. Simulated by using default or variable
arguments.

```javascript
class Calculator {
  add(a, b, c) {
    if (c !== undefined) return a + b + c;
    return a + b;
  }
}
```

#### **Run-time Polymorphism (Method Overriding)**

A subclass provides its own implementation of a parent class method.

```javascript
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}

const obj = new Child();
obj.greet(); // Hello from Child
```

---

### Abstraction

Abstraction hides unnecessary details and shows only the important
features.

#### **Abstract Classes (simulated)**

JavaScript doesn't have abstract classes, but you can simulate them:

```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Abstract class cannot be instantiated directly");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.54
```

### Interface (simulated)

JS doesn't have interfaces. They can be simulated by using classes with
method contracts or documentation.

---

### `this` keyword

Refers to the current object in context. Its value depends on how a
function is called.

```javascript
class Example {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this.name);
  }
}

const e = new Example("Hare");
e.show(); // Hare
```

---

### `super` keyword

Used to call parent class constructor or methods.

```javascript
class Parent {
  constructor() {
    this.name = "Parent";
  }
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }
  greet() {
    super.greet(); // calls parent method
    console.log("Hello from Child");
  }
}

const c = new Child();
c.greet();
// Hello from Parent
// Hello from Child
```

---

### `static` keyword

Defines methods or properties that belong to the class, not the
instance.

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // 8
```

---
