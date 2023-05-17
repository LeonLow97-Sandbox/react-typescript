# Types around props and states

## Passing props from Parent to Child

- Interface to define what props Child expects to receive.
    - Are we providing the correct props to Child when we show it in Parent?
    - Are we using the correctly named + typed props in Child?

## React Functional Components

```ts
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
```

