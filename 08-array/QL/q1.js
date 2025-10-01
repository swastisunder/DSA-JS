// Maximum and Minimum Element in an Array
// ABCO Accolite Amazon Cisco Hike Microsoft Snapdeal VMWare Google Adobe

// Maximum and minimum of an array using minimum number of comparisons
// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

function getMinMax(arr) {
  let min, max, i; // variables for min, max, and index
  let n = arr.length; // total number of elements in the array

  // STEP 1: Initialization
  // If array has even number of elements
  if (n % 2 === 0) {
    // Compare the first two elements
    if (arr[0] > arr[1]) {
      min = arr[1]; // smaller one becomes min
      max = arr[0]; // bigger one becomes max
    } else {
      min = arr[0];
      max = arr[1];
    }
    i = 2; // Start checking from index 2 because 0 and 1 are already used
  }
  // If array has odd number of elements
  else {
    min = max = arr[0]; // set both min and max to first element
    i = 1; // Start checking from index 1
  }

  // STEP 2: Process elements in pairs
  while (i < n - 1) {
    // Compare the two elements of the pair (arr[i], arr[i+1])
    if (arr[i] > arr[i + 1]) {
      // If first element is bigger
      if (max < arr[i]) {
        // check if it is new max
        max = arr[i];
      }
      if (min > arr[i + 1]) {
        // check if second element is new min
        min = arr[i + 1];
      }
    } else {
      // If second element is bigger
      if (max < arr[i + 1]) {
        // check if it is new max
        max = arr[i + 1];
      }
      if (min > arr[i]) {
        // check if first element is new min
        min = arr[i];
      }
    }
    i += 2; // Move to the next pair
  }

  // STEP 3: Return the result
  return { min, max };
}

// Example run
console.log(getMinMax([9, 6, 3, 2, 5, 8, -9, 987542]));
