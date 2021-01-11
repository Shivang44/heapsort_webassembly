## Heapsort implementation in pure JS compared to WebAssembly/WASM

I wanted to learn how Webassembly works, as well as learn about how much performance improvements it could provide over JS when performing something CPU-bound, so I created a basic implementation of [Heapsort](https://www.geeksforgeeks.org/heap-sort/) that has runtime complexity of O(nlogn) to sort an unsorted array.

**heapsort.js** contains the JS implementation of heapsort.

**heapsort.c** contains the native C implementation of heapsort (C newbie, so it's probably not great :))

## Results

As you can see below, there are performance improvements but it is not too drastic. I believe part of this is because I am copying an array back and forth using [emscripten](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html), but I believe there is a way to share a heap of memory between C and JS, but that seemed much more involved so I chose to keep it simple here and pass data back and forth. Future iterations could also generate the array inside C itself rather than passing it in, but to keep the benchmarks consistent I wanted both the C and JS implementation to sort the same numbers.

# array size = 10

```
Heapsort (Pure JS, size = 10): 0.238ms
Heapsort (WebAssembly, size = 10): 5.194ms
```

# array size = 100

```
Heapsort (Pure JS, size = 100): 0.462ms
Heapsort (WebAssembly, size = 100): 6.277ms
```

# array size = 1000

```
Heapsort (Pure JS, size = 1000): 4.294ms
Heapsort (WebAssembly, size = 1000): 6.013ms
```

# array size = 10000

```
Heapsort (Pure JS, size = 10000): 11.788ms
Heapsort (WebAssembly, size = 10000): 7.016ms
```

# array size = 100000

```
Heapsort (Pure JS, size = 100000): 34.995ms
Heapsort (WebAssembly, size = 100000): 29.616ms
```


# array size = 1000000

```
Heapsort (Pure JS, size = 1000000): 280.323ms
Heapsort (WebAssembly, size = 1000000): 279.423ms
```

Beyond n = 1000000 I received memory errors.
