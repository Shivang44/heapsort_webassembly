#include <stdio.h>
#include <emscripten.h>

void heapify(uint8_t* array, int root_index, int array_length) {
    int largest_index = root_index;
    int left_child_index = 2 * root_index + 1;
    int right_child_index = left_child_index + 1;

    if (left_child_index < array_length && array[left_child_index] > array[largest_index]) {
        largest_index = left_child_index;
    }

    if (right_child_index < array_length && array[right_child_index] > array[largest_index]) {
        largest_index = right_child_index;
    }

    if (largest_index != root_index) {
        int tmp = array[root_index];
        array[root_index] = array[largest_index];
        array[largest_index] = tmp;

        heapify(array, largest_index, array_length);
    }
}

EMSCRIPTEN_KEEPALIVE
uint8_t* heap_sort(uint8_t* array, int array_length) {

    // Build max-heap
    int i;
    for (i = array_length / 2 - 1; i >= 0; i = i - 1) {
        heapify(array, i, array_length);
    }

    // // Perform heapsort
    int j;
    for (j = array_length - 1; j >= 0; j = j - 1) {
        int tmp = array[0];
        array[0] = array[j];
        array[j] = tmp;
        
        heapify(array, 0, j);
    }

    return array;
}