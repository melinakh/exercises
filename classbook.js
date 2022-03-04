class Booklist {
  constructor(
    numbersOfBookMarkAsRead,
    numbersOfBookMarkNotRead,
    aReferenceToTheNextBook,
    referenceToTheCurruntBookBeingRead,
    aReferenceTotheLastBookRead,
    index,
    array
  ) {
    this.numbersOfBookMarkAsRead = numbersOfBookMarkAsRead;
    this.numbersOfBookMarkNotRead = numbersOfBookMarkNotRead;
    this.index = array[4];
    this.aReferenceToTheNextBook = this.array[++index];
    this.referenceToTheCurruntBookBeingRead = this.array[index];
    this.aReferenceTotheLastBookRead = this.array[--index];
    this.array = array;
  }
}

const person1 = new Booklist(3, 5, ["x", "m", "s", "k", "g", "t", "e"], 4);
console.log(person1);

class Book {
  constructor(title, genre, author, read) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
  }
  readDate() {
    console.log("the read date is");
  }
}
