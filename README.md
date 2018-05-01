# Compose React components with render props

React-composed makes code where you need to get the result of multiple components with render props easier and more readable.

How does it work:

```jsx
// you might have these two components
const Test1 = ({ children }) => children("Test1");
const Test2 = ({ children }) => children("Test2");

// if you would need both results you would compose them like this:

<Test1>
  {test1 =>
    <Test2>
      {test2 =>
        <p>test1: {test1}, test2: {test2}</p>
      }
    </Test>
  }
</Test1>

// with react-composed this would look like the following:
import Composed from 'react-composed'

<Composed test1={<Test1/>} test2={<Test2/>}>
  {({test1, test2}) => <p>test1: {test1}, test2: {test2}</p>}
</Composed>
```

With `react-composed` you need less nesting. With more API choosing for render-props, instead of HOCs, you'll have more and more components passing information down using render props. For instance react apollo:

```jsx
<Composed query1={<Query query={query1}} query2={<Query query={query2}} mutation={<Mutation mutation={mutation}}>
  {({query1, query2, mutation}) => ...}
</Composed>
```

## Requirements

`react-composed` only works with components that adopt the `children` prop as the primary render prop. Most React components use this convention now (even the official context API uses this)

## Installation

Just `yarn add react-composed`
