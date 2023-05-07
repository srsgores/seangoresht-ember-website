---
title: Prop Drilling Destroyed Web Development
description: How overloading components with "props" has complicated web development
date: "2023-05-07T05:57:40.549Z"
image:
    url: "assets/images/prop-drilling.jpg"
    description: "Prop drilling logo with popular frameworks and view libraries: ReactJS, VueJS, and EmberJS"
tags:
    - web development
    - reactjs
    - vuejs
    - components
    - front-end
---
Prop drilling is a common term in web development, especially in ReactJS applications, that refers to the practice of passing data from a parent component to a deeply nested child component through several intermediate components that do not need or use that data. For example, imagine you have a component tree like this:

```
App
	Header
		Navbar
			UserMenu
				Profile
					Avatar
```

If you want to pass the user’s avatar URL from the App component to the Avatar component, you would have to pass it as a prop through every component in between, even though they do not care about it. This is prop drilling, and it can cause several issues, such as:

* Reduced component re-usability: If you want to reuse a component that receives props from its parent, you have to make sure that the parent also passes those props, even if it does not need them. This creates unnecessary coupling and reduces the flexibility of your components.
* Increased complexity and maintenance cost: Prop drilling makes your code harder to read and understand, as you have to keep track of which props are passed where and why. It also increases the risk of bugs and errors, as any change in the prop structure or value can affect multiple components down the tree. Moreover, it makes testing more difficult, as you have to mock or provide props for every component in the chain.
* Reduced performance: Prop drilling can cause unnecessary re-rendering of components that do not depend on the prop value. For example, if the user’s avatar URL changes, every component from App to Avatar will re-render, even though only the Avatar component needs to update. This can affect the performance and user experience of your application.

## How adding more components doesn’t solve prop drilling
One might think that adding more components can help reduce prop drilling by breaking down the component tree into smaller and simpler units. However, this is not always the case. In fact, adding more components can sometimes make prop drilling worse, as you have to pass more props through more levels of components.

For example, imagine you have a component tree like this:

```
App
	Header
		Navbar
			UserMenu
				Profile
					Avatar
	Main
		Sidebar
			Menu
				MenuItem
		Content
			PostList
				PostItem
					PostHeader
						PostAuthor
							Avatar
```
If you want to pass the user’s avatar URL from the App component to both Avatar components (in the Header and in the `PostList`), you would have to pass it through 10 intermediate components that do not need it. This is a lot of prop drilling!

You might think that adding more components can help reduce this prop drilling by creating smaller and more reusable units. For example, you might create a UserAvatar component that takes the user’s avatar URL as a prop and renders an Avatar component with some additional logic or styling. Then, you might use this UserAvatar component in both places where you need to show the user’s avatar. This would result in a component tree like this:

```
App
	Header
		Navbar
			UserMenu
				Profile
					UserAvatar // new component
						Avatar
							Main
	Sidebar
	Menu
	MenuItem
	Content
	PostList
	PostItem
	PostHeader
	PostAuthor
	UserAvatar // new component
	Avatar
```
However, this does not solve the prop drilling problem at all. In fact, it makes it worse! Now you have to pass the user’s avatar URL through 11 intermediate components instead of 10. You have added one more level of prop drilling for each Avatar component.

Moreover, you have created a new component that is tightly coupled with the user’s avatar URL prop. This means that you cannot reuse this component for other purposes or with other props. For example, if you want to show an avatar for another entity (such as a comment author or a friend), you cannot use the UserAvatar component, as it expects a user’s avatar URL prop. You would have to create another similar component (such as CommentAvatar or FriendAvatar) that takes a different prop (such as commentAuthorAvatarUrl or friendAvatarUrl). This creates code duplication and reduces re-usability.
