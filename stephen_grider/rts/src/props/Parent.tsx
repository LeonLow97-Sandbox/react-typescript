import { Child } from './Child';

const Parent = () => {
    const color: string = 'red'

  return <Child color={color} />;
};

export default Parent;
