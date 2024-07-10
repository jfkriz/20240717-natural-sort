# Natural Sort

## Problem

Natural sorting, also known as "human sorting" or "alphanumeric sorting," is a way to sort strings in a manner that is more intuitive to humans. For example, instead of sorting strings like "file1", "file10", and "file2" as "file1", "file10", "file2" (lexicographical order), it would sort them as "file1", "file2", "file10".

The goal of this challenge is to implement natural sorting in the programming language of your choice by creating a custom comparator/comparer. 

Bonus challenge: the solution should support sorting in both ascending and descending order.

### Example

Given the list of strings:
```
["file10", "file2", "file1a", "file1b", "file20", "file11", "file3"]
```

The natural sort in ascending order should result in:
```
["file1a", "file1b", "file2", "file3", "file10", "file11", "file20"]
```

The natural sort in descending order should result in:
```
["file20", "file11", "file10", "file3", "file2", "file1b", "file1a"]
```

## Concept of a Custom Comparator/Comparer

In many programming languages, the default sorting algorithm uses lexicographical order for strings and numerical order for numbers. However, natural sorting requires a more sophisticated approach that can handle mixed alphanumeric strings in a human-friendly manner.

A custom comparator or comparer is a function or object that defines custom rules for comparing two elements. This allows you to sort elements in a non-default order. The custom comparator/comparer is typically passed to the sorting function of the language, which uses it to determine the order of the elements.

### References

- **Java and Kotlin:**
  - [Comparator Interface (Java)](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html){:target="_blank"}
  - [How to Use Comparator in Java](https://www.baeldung.com/java-comparator-comparable){:target="_blank"}
  - [Using Comparators in Kotlin](https://kotlinlang.org/docs/collection-ordering.html#using-comparators){:target="_blank"}

- **C#:**
  - [IComparer Interface](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.icomparer-1)
  - [How to Implement IComparer](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.icomparer-1.compare)

- **Python:**
  - [Sorting HOW TO](https://docs.python.org/3/howto/sorting.html#the-old-way-using-the-cmp-parameter)
  - [Key Functions for Sorting](https://docs.python.org/3/howto/sorting.html#key-functions)

- **JavaScript and TypeScript:**
  - [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Understanding JavaScript's Sort Method](https://www.javascripttutorial.net/javascript-array-sort/)

## Challenge

1. Implement the natural sort function in each of your preferred languages.
2. Ensure the function supports both ascending and descending order.
3. Test the function with various lists of strings to verify the correct natural order.

Good luck, and happy coding!

# C3ProjectTemplate
The recommended IDEs are as follows, but feel free to use whatever IDE you are comfortable with.

-   [C#](Templates/C%23) - [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/)
-   [Java](Templates/Java) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [JavaScript](Templates/JavaScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
-   [Kotlin](Templates/Kotlin) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [Python](Templates/Python) - [Pycharm](https://www.jetbrains.com/pycharm/download/?section=windows) (Community Edition is fine)
-   [TypeScript](Templates/TypeScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
