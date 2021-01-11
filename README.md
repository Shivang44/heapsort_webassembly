## Heapsort implementation in pure JS compared to WebAssembly/WASM

I wanted to learn how Webassembly works, as well as learn about how much performance improvements it could provide over JS when performing something CPU-bound, so I created a basic implementation of Heapsort that has runtime complexity of O(nlogn) to sort an unsorted array.

heapsort.js contains the JS implementation of heapsort.
heapsort.c contains the native C implementation of heapsort (C newbie, so it's probably not great :))

## Results

As you can see below, there are performance improvements but it is not incredibly drastic. I think part of this is because I am using emscripten to compile the C and not directly calling the compiled WASM code, but since you can only pass integers and floats to native C code, and not an array, I decided this would be the least resistent path forward. To make this even more performant I could just pass an array length to the native C code and generate the array natively inside C instead of in JS, and directly call the compiled WASM code.

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