const heapify = (array, root_index, array_length) => {
    let largest_index = root_index;
    let left_child_index = 2 * root_index + 1;
    let right_child_index = left_child_index + 1;

    if (left_child_index < array_length && array[left_child_index] > array[largest_index]) {
        largest_index = left_child_index;
    }
    
    if (right_child_index < array_length && array[right_child_index] > array[largest_index]) {
        largest_index = right_child_index;
    }


    if (largest_index != root_index) {
        [array[root_index], array[largest_index]] = [array[largest_index], array[root_index]];
        heapify(array, largest_index, array_length);
    }

    return array;
}

const heapSort = (array) => {
    // Build max-heap
    for (var i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        heapify(array, i, array.length);
    }

    // Perform heapsort
    for (var i = array.length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, 0, i);
    }

    return array;
}

const array_length = process.argv[2];
const array = Array.from({length: array_length}, () => Math.floor(Math.random() * array_length));

console.time('heapsort in pure JS with array length of ' + array_length);
heapSort(array);
console.timeEnd('heapsort in pure JS with array length of ' + array_length);
