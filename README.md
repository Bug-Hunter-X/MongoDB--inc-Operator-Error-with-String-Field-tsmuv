# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error when using the MongoDB `$inc` operator with a string field.  The `$inc` operator is designed for incrementing numeric values; attempting to use it on a string field will result in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct solution.

## How to Reproduce

1. Create a MongoDB collection named 'myCollection' with at least one document containing a string field named 'myString'.
2. Run the code in `bug.js`.
3. Observe the error message.

## Solution

The solution involves ensuring that the field you're attempting to increment is of a numeric type (e.g., int, long, double).