# Getting Started with react hooks

This is about react class component life cycle

componentDidMount
componentDidUpdate
componentWillUnmount 
getDerivedStateFromProps (Should be static)
shouldComponentUpdate (compare previous and current value, then returns boolean value true or false)
getSnapshotBeforeUpdate (After render is being started, get the snapshot before update DOM)

# When initial loading
constructor --> render --> componentDidMount

# When prop or state changed
getDerivedStateFromProps -- > shouldComponentUpdate --> render --> getSnapshotBeforeUpdate --> componentDidUpdate

# When component is removed
componentWillUnmount

## Learn More
https://www.w3schools.com/react/react_lifecycle.asp
https://www.freecodecamp.org/news/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030/
https://stackoverflow.com/questions/49617486/how-to-use-lifecycle-method-getderivedstatefromprops-as-opposed-to-componentwill

# React-Dev-Learning
