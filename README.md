This is a sample project for [Advent of Code 2022](https://adventofcode.com/2022).

Current Languages:
- JS
- Elixir

To run the code for Day One, run
```
npm test
mix test
```

## Development

### Node
For a simple way to test node scripts, do the following
1. Open chrome://inspect in your browser
2. Ensure you are on the Devices tab
3. Run `npm run debug <path to file to test>
4. Click on the inspect link that appears in Chrome
5. Debug as expected

Alternatively, `console.log` or `util.inspect` statements work quickly

### Elixir
There are multiple ways to explore the elixir code.
1. After installing elixir according to the `.tool-versions` file, run `iex`. This allows elixir to be executed inline.
2. Run `iex -S mix` to access functions defined within the `.ex` files
3. Use `IO.inspect` to print values during runtime. For example, you can `IO.inspect(x, label: 'x value')` or pipe to it: `|> IO.inspect(label: 'your label')`

Note: Why is `input.txt` in a `priv` folder? This is an old naming convention Elixir (well, Erlang) uses to access static resources.
