# Style Guide v1.0

As codebases grow in size and complexity, it is necessary to establish and maintain some kind of **style guide to which each contributor should conform**. While tools like ESLint and Prettier can support us in this regard, additional rules are needed to allow us to better communicate with each other.

The following set of conventions should make it easier for you to understand our code and aid you in making meaningful contributions to the project:

## Table of Contents:

-   General Conventions

  1. Naming Convention
  2. Function Declaration
  3. Implicit Returns for One-liner Functions
  4. Spread Syntax
  5. Type Casting / Type Conversion
  6. Assigning Composables / Stores to Variables
  7. Organizing Components into Subfolders
  8. Single Source of Truth (SSOT)
  9. Refactoring for Modularity and Reusability
  10. On Refactoring Composables
  11. Conditional (Ternary) Operators

-   HTML/CSS & Shadcn-Vue

  1. Shadcn Components
  2. Colors and Themes
  3. Styling
  4. On Making Pages Responsive

-   TypeScript

  1. TypeScript Types
  2. Type Inferences vs Type Assertions

-   Nuxt/Vue & VueUse/core

  1. Composition API
  2. Use Shorthands for Vue Attributes
  3. for loops
  4. setTimeout
  5. emit
  6. reactive / ref
  7. Event Listeners Methods
  8. Watchers & Computed Properties
  9. Computed Properties and Utilizing Reactive
  10. Properties From Props
  11. Side Effects

-   Codegen

  1. Generating Graphql Types

-   Graphql/Lighthouse & Laravel

  1. Naming Conventions
  2. Queries
  3. Filter Queries
  4. Mutations
  5. Custom Mutations
  6. Creating Queries and Mutations

-   Others

## General Conventions:

### Naming Conventions

Names should be **clear** and **self-explanatory**. This not only makes the code more readable but also reduces the need for excessive comments. For instance:

-   Functions: `getCollectionById()`
-   Components: `KeyboardShortcuts.vue`
-   Files: `setIdentity.ts`

Avoid ambiguous or generic names like `doSomething()`, `data`, or `temp`. Code and comments should be written in **English** only to maintain consistency across the codebase.

### Function Declaration

When declaring **functions**, you can use the `const` keyword for **one-liner functions**. However, ensure that you declare them above their usage in your code.

```js
const add = (a, b) => a + b
```

For more **complex functions**, it is preferable to use the `function` keyword, as demonstrated below:

```js
function complex(params) {
	//some complex steps
}
```

When declaring **variables**, use the `const` or `let` keyword.

```js
const num = 10
let name = 'John'
```

#### Object Methods & Anonymous Function

When declaring an object method, the following convention should be followed:

<details>
  <summary>Object method without params:</summary>

```js
const actions = computed(() => ({
	checkout: {
		fieldName: 'Place Order',
		attrs: {
			style: {
				backgroundColor: appBar,
				color: 'white',
				width: '65%',
			},
			// without params
			click: openModal,
		},
	},
}))
```

</details>

Unless you need to pass parameters to the method, in which case you should use an anonymous function:

<details>
  <summary>Object method with params:</summary>

```js
const actions = computed(() => ({
	checkout: {
		fieldName: 'Place Order',
		attrs: {
			style: {
				backgroundColor: appBar,
				color: 'white',
				width: '65%',
			},
			// with params
			click: () => openModal(modalItems.value, 1),
		},
	},
}))
```

</details>

This practice ensures clarity in your code. When the method requires parameters, an anonymous function is used to pass those parameters, making the code more explicit and maintainable.

_**Note:** Function declarations `(using the function keyword)` are hoisted to the top of their scope, meaning they can be called before they appear in the code.
Const declarations `(with arrow functions)` are not hoisted in the same way, so they must be defined before they are used._

### Implicit Returns for One-liner Functions

For **one-liner functions**, it's more concise to use implicit returns instead of explicitly writing the `return` keyword.

❗ Bad

```js
// when `return` is explicitly written

const getPumpedAbout = (thing) => {
	return `Pumped about ${thing}!`
}
```

✅ Good

```js
// if we write it like this, the `return` is implied

const getPumpedAbout = (thing) => `Pumped about ${thing}!`
```

### Spread Syntax

When it comes to duplicating or combining arrays and objects in JavaScript, it is advisable to make use of the spread syntax. This syntax simplifies the process of creating duplicate objects or merging arrays seamlessly.

```js
const originalObject = { name: 'John', age: 30 }
const copyObject = { ...originalObject }

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergedArray = [...array1, ...array2]
```

While this method of combining arrays and objects is shallow, we do have utility functions that can handle deeply nested ones. Specifically, you can use `deepCopy` from [_lodash_](https://lodash.com/docs/4.17.15#cloneDeep) and `deepMerge` from
[_@antfu/utils_](https://github.com/antfu/utils).

Here's a sample usage:

```js
const chart = useChartData(params, importedQuery)
if (options) deepMerge(chart.options, options)
```

```js
cacheData = deepCopy(
	cache.readQuery({
		query,
		variables,
	}),
)
```

By following these practices, you can work with JavaScript objects and arrays more effectively, even when dealing with deeply nested structures.

### Type Casting / Type Conversion

To facilitate the conversion of data from one type to another in JavaScript, you can use the following syntax:

```typescript
// Convert to a number
result = Number('324')

// Convert to a string
result = String(324)

// Convert to a boolean
result = Boolean('')
```

### Assigning Composables / Stores to Variables

When working with composables or Pinia stores, it's advisable to assign their return values to variables before accessing their properties or methods. This practice aids in making the code more readable, easily maintainable, and ensures the codebase is clean, traceable, and understandable.

❗ Bad

Avoid directly accessing the properties or methods of a composable or store:

```js
console.log(useComposable().test)
```

✅ Good

Assign the composable or store to a variable before accessing its properties or methods. This is especially beneficial **_when destructuring breaks reactivity_**.

```js
const composable = useComposable()
console.log(composable.test)
```

#### Destructuring

Destructuring can be used to efficiently extract properties from the objects returned by composables or Pinia stores. It simplifies the code and enhances readability.

❗ Bad

```js
const composable = useComposable()
const test = composable.test
console.log(test)
```

✅ Good

```js
const { test } = useComposable()
console.log(test)
```

All the practices outlined above are equally effective and beneficial when applied to Pinia stores. Ensuring that code remains consistent, clean, and manageable across different parts of the application, whether using composables or stores.

### Organizing Components into Subfolders

When a module comprises multiple components, consider creating subfolders within the components directory to enhance organization.

For instance, let's take the example of the **Audit Inventory** module using the `audit-inventory.vue` page. This page involves the usage of three components: `InventorieAudit.vue`, `InventoriesAuditReport.vue`, and `InventoriesAuditInvestigation.vue`

To systematically arrange these components, within the `inventories` folder create a subfolder named `audit` that accommodates all the necessary components for the **Audit Inventory** module. This approach ensures a structured and easily navigable component hierarchy.

```plaintext
components/
    └── inventories/
        └── audit/
            ├── Audit.vue
            ├── Report.vue
            ├── Investigation.vue
            └── ... (other components related to Audit Inventory)
```

On table folder we don't prefix the folder name unless we'd like it to be the same as the component name. This is to avoid using the very generic Index.vue name,
so `modal/Modal.vue` is **similar** to `modal/Index.vue`

**_Note_**: _this only works in component directory as of the time of writing_

### Single Source of Truth (SSOT)

Maintaining a **Single Source of Truth** **_(SSOT)_** in your codebase is essential for clarity, consistency, and reliability. **_(SSOT)_** refers to the practice of managing data from a single **_“place”_** to guarantee that every piece of data is stored and updated exclusively at this location. This ensures that the data is always reliable, consistent, and easy to reference.

❗ Bad

```vue
<template>
	<button @click="increment">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
	initialCount: Number,
})

const count = ref(props.initialCount)

const increment = () => {
	count.value++
}
</script>
```

In this `"Bad"` example, the count ref, initialized with the `initialCount` prop’s value, is directly modified by the `increment` function. This practice disrupts the SSOT, leading to potential inconsistencies in data flow and state management.

✅ Good

```vue
<template>
	<button @click="increment">{{ count }}</button>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { defineProps } from 'vue'

const props = defineProps({
	modelValue: Number,
})

const count = useVModel(props, 'modelValue')

const increment = () => {
	count.value++
}
</script>
```

In this `"Good"` example, useVModel from VueUse library is used to create a two-way binding with the modelValue prop, which represents the initialCount. This makes count effectively a local state that’s synced with the prop, ensuring that the prop remains the single source of truth.

### Refactoring for Modularity and Reusability

Moving code into a composable from a Single File Component (SFC) is a good practice when you have logic or functionality that could be reused by multiple components. Composables in Vue are a way to organize and share code that doesn't directly relate to the UI but provides specific functionality, data, or business logic.

We're enhancing our codebase by moving helper functions outside of `export default`. This strategy increases modularity, reusability, and maintainability. Here, we illustrate this approach using real examples from our recent refactoring:

[Refactored useDownload.ts](https://github.com/apollosystemsph/ERP/blob/develop/client/composables/table/useDownload.ts)

#### Key Benefits

-   **Reusability**: Functions defined externally can be reused across components or modules, reducing duplication.
-   **Testability**: Independent functions simplify unit testing, allowing more focused and reliable tests.
-   **Readability and Maintenance**: Separating utility functions from component logic enhances code clarity and eases maintenance.
-   **Performance**: External functions don't get recreated on each component re-render, improving performance in some scenarios.

#### Guidelines for Developers on When to Refactor

-   **Identify Reusable Logic**: Look for complex operations or repetitive logic in components that can be abstracted.
-   **Create Modular Functions**: If it can benefit other developers extract such logic into separate functions or composables in `~/utils` or `~/composables`.
-   **Manage Dependencies**: Pass relevant props, state, or refs as parameters to these external functions.
-   **Apply Incrementally**: Refactor components gradually, applying these principles as you work on different parts of the codebase.
-   **Clear Naming Conventions**: Use descriptive names for your functions, reflecting their purpose.

### On Refactoring Composables

When refactoring a composable component, it is advisable to refrain from modifying the structure of the returned data unless absolutely essential.

For example, if the composable function `charData()` currently returns an object, it should consistently adhere to returning an object.

Altering the structure of the return value from `charData()` can introduce breaking changes, unless the other components relying on this composable are also refactored in sync, which may be unnecessary and could potentially cause additional complications.

### Conditional (Ternary) Operators

Using conditional operators is encouraged as they reduce the amount of code written. However, it is not recommended to chain multiple layers of conditional operators as it only complicates the code.

✅ Good

```javascript
const name = person ? person.name : 'Guest User'
```

❗ Bad

```javascript
const result = x > 0 ? 'Valid' : x === 0 ? 'Zero' : 'Negative'
```

## HTML/CSS & Shadcn-Vue:

In this project, we are employing Shadcn-Vue, which comprises a set of reusable components constructed with Radix Vue and Tailwind CSS.

### Shadcn Components

To incorporate a new component, execute the following command:

```bash
bunx shadcn-vue@latest add [component]
```

This command generates reusable components that can be styled and called whenever necessary. For additional details, please refer to the documentation [Shadcn-Vue](https://www.shadcn-vue.com/)

**Note:** In our project, there is no need to import Shadcn components each time you use them.

### Themes

When applying colors to your components, ensure that you use the variables located in the themes.scss files. This approach ensures that the styling adjusts to the current theme being utilized

✅ Good

```javascript
<Button class="bg-danger text-danger-foreground" />
```

❗ Bad

```javascript
<Button class="bg-red-500 text-white" />
```

### Styling

In most cases, your CSS should be **scoped** to ensure that it remains confined to your component and doesn't affect the global namespace.

```vue
<template>
	<Contianer>
      <p class="myClass">Lorem ipsum</p>
    </Container>
</template>

<script lang="ts" setup>
...
</script>

<style scoped>
.myClass {
  background-color: blue;
}
</style>
```

### On Making Pages Responsive

When developing a responsive design, it is crucial to prioritize adaptability across devices instead of crafting distinct views for desktop and mobile. Maintaining separate versions for each often results in duplicated code, escalating maintenance complexity.

Opting for a responsive design minimizes redundancy, lowers the likelihood of bugs, and guarantees a uniform user experience.When developing a responsive design, it is imperative to prioritize adaptability across devices instead of crafting distinct views for desktop and mobile. Maintaining separate versions for each often results in duplicated code, escalating maintenance complexity. Opting for a responsive design minimizes redundancy, lowers the likelihood of bugs, and guarantees a uniform user experience.

## TypeScript:

Use TypeScript for type safety, preferring lowercase for primitive types.

```js
interface Sample {
	title?: string
	value?: number
	required?: boolean
    multi: Field // custom type
    data: Modal // custom type
}
```

### TypeScript Types

When you encounter situations where you find yourself creating unnecessary falsy values, it is advisable to make those values optional instead.

❗ Bad

```typescript
const query: QueryPagination = reactive({
	search: { timeout: undefined, text: '' },
	filter: { timeout: undefined, text: '' },
	imported: { gql: undefined, scope: undefined, method: '' },
})

interface QueryPagination {
	search: { timeout: NodeJS.Timeout | undefined; text: string }
	filter: { timeout: NodeJS.Timeout | undefined; text: string }
	imported: { gql: any; scope: any; method: string }
}
```

✅ Good

```typescript
const query: QueryPagination = reactive({ search: {} })

interface QueryPagination {
	search: { timeout?: NodeJS.Timeout; text?: string }
	imported?: {
		gql?: DocumentParameter<any, any>
		scope?: AnyFunction
		method?: keyof GqlQuery | string
	}
}
```

If your function requires the ability to handle falsy values, you can leverage our TypeScript type helpers defined in `index.d.ts` for instance:

```js
function processValue(value: Maybe<string>) {
  return value ? value.toUpperCase() : 'Placeholder value'
}
```

This approach improves code readability and maintainability by making it clear which values are optional and aligns with TypeScript's strong typing system.

### Type Inferences vs Type Assertions

When working with types, it's preferred to rely on type inference over type assertions. Type inference allows the compiler to automatically deduce the types of variables and expressions based on their usage, making your code more concise and less error-prone.

#### Type Inference

Are used to tell the compiler that **a variable through its lifetime can only have a specified type**. When someone tries to assign a type that is incompatible, an error will be thrown.

```typescript
let age: number = 18
let name: string = 'John'
age = name
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

```typescript
const add = (a: number, b: number) => a + b
add(1, '2')
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

When it comes to return types opt for specifying the return type when you can. For instance, instead of asserting the type like this:

<details>
  <summary>❗ Bad</summary>

```js
	return orders.map(
		(order) =>
			({
				id: order.id,
				product: { connect: order.product.id },
				qty: order.qty,
				price: { connect: order.product.price?.id },
			}) as OrderDetailInput,
	)
```

</details>

Consider refactoring the code to something like the following, where the return type is explicitly defined:

✅ Good

```js
return orders.map((order): OrderDetailInput => {
	return {
		id: order.id,
		product: { connect: order.product.id },
		qty: order.qty,
		price: { connect: order.product.price?.id },
	}
})
```

#### Type Assertions

Type assertions should be used **_sparingly_** and only when you have more specific knowledge about the types involved. They tell the TypeScript compiler to treat a value as a specific type, even if the compiler's inference is different.

```typescript
function amend(type: number, data: InventoryAuditDetail) {
	if (data) data.action = type
	const issueTypeTotal =
		data.product &&
		data.product.inventories.reduce(
			(total, value) => {
				if (value && value.issue_type && value.qty) {
					const issueType = getIssueType(value.issue_type)
					total[issueType] = (total[issueType] || 0) + value.qty
				}
				return total
			},
			{} as { [issueType: string]: number },
		)

	useModal(auditAmend, amendAction, data, ['action', 'qty', 'product'], {
		type: 'error',
		title: 'Current Inventory Issues',
		data: [
			Object.entries(issueTypeTotal ?? {})
				.map(([issueType, total]) => `${issueType}: ${total}`)
				.join(', '),
		],
	})
}
```

In this example, we use a type assertion on **issueTypeTotal** because it's a new variable unrelated to the **InventoryAuditDetail** type and has a primary type of `any`. This assertion, **`{ [issueType: string]: number }`**, clarifies that **issueTypeTotal** represents a mapping of issue types to numbers, ensuring the correct type association.

In general, it's best to rely on type inference whenever possible, as it leads to more maintainable and less error-prone code. Use type assertions only when there's a specific reason to override the compiler's type inference.

## Nuxt/Vue & VueUse/core:

### Composition API

Every new feature is required to be written in the new **Composition API** and should adhere to the following guidelines:

```vue
<template>
	<button @click="increment">Count is: {{ count }}</button>
</template>
<script lang="ts" setup>
import type { CarouselNFT } from '~/components/base/types'

// declaring props
const props = withDefaults(
	defineProps<{
		data: Modal
		serverModels?: any
		loading?: boolean
	}>(),
	{ serverModels: () => ({}) },
)

// reactive state
const count = ref(0)

const author = reactive({
	name: 'John Doe',
	books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

// functions that mutate state and trigger updates
const increment = () => {
	count.value++
}

// a computed ref
const publishedBooksMessage = computed(() => {
	return author.books.length > 0 ? 'Yes' : 'No'
})

watch(count, (newCount) => {
	console.log(`count is ${newCount}`)
})

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})
</script>
```

**_Declaring props note_**: It's worth noting that we only set default values for optional properties when necessary. If a default value is falsy, we might choose not to assign it, letting it remain undefined. For mandatory properties, we don't provide default values.

For more details make sure to check out [Vue's official documentation](https://vuejs.org/guide/introduction.html).

### Use Shorthands for Vue Attributes

-   Use `:href` instead of `v-bind:href`
-   Use `@click` instead of `v-on:click`
-   Use `#[]` instead of `v-slot:`

### for loops

Try to use more functional approaches since loop is really hard to maintain.
Beside if you really need using `for` loop, you should using `for-of` loop
since by doing so we can avoid off-by-one errors

❗ Bad

```js
for (let x = 0; x < 10; x++) {
	const element = list[x]
	// your statement
}
```

✅ Good

```js
// Best
list.forEach(element => ...)

// Good
for (const element of array) {
  // your statement
}
```

#### v-for with an Object

With Vue's `v-for` loop, you no longer need to write code like this:

<details>
  <summary>❗ Bad</summary>

```js
	<Col
		v-for="(field, key) in Object.entries(informationFields)"
		:key="key"
		cols="4"
	>
		<PosSidebarInformation
			:field="field[1]"
			:data-key="field[0]"
			:models="orderStore.informationModels"
		/>
	</Col>
```

</details>

Instead you can write it like this:

✅ Good

```js
	<Col
		v-for="(field, key) in informationFields"
		:key="key"
		cols="4"
	>
		<PosSidebarInformation
			:field="field"
			:data-key="key"
			:models="orderStore.informationModels"
		/>
	</Col>
```

The iteration order will be based on the result of calling `Object.keys()` on the object, you can also add another alias for the index: `v-for="(field, key, index) in Object.entries(informationFields)"`

### setTimeout

Replace the usage of `setTimeout` with the `useDebounceFn`
from **VueUse/core** function:

```vue
const debouncedFn = useDebounceFn(() => { // do something }, 1000)
```

### emit

Utilize the singular form `emit` instead of emits

```vue
const emit = defineEmits(['emitName1', 'emitName2'])
```

### reactive / ref

Use `ref` for primitive values

```vue
const primitive = ref(0)
```

User `reactive` for objects

```vue
const objects = reactive({ property1: false, property2: 240, })
```

### Event Listeners Methods

In Vue.js, you can use event listeners like @click to bind a method to an HTML element's event. When you use @click, you are essentially telling Vue to call a method when that element is clicked.

**Without the parenthesis:**

```vue
<ListItem @click="editChatRoom" />
```

This tells Vue to call the `editChatRoom` method **_when the element is clicked_**.

**With parenthesis:**

```vue
<ListItem @click="editChatRoom()" />
```

This tells Vue to call the method `editChatRoom` **_immediately when the component is rendered_**. This may not be what you want if you only want the method to execute when the element is clicked.

### Watchers & Computed Properties

Use computed properties over watchers when applicable, both computed properties and watchers are used to reactively respond to changes in data, but they serve slightly different purposes and have different use cases:

#### Computed Properties:

1. **Declarative:** computed properties are more declarative. You specify what the output should be based on your reactive sources, rather than specifying how the state should change in response to changes, as with watchers.

2. **Automatic Dependencies Tracking:** With computed, Vue automatically tracks dependencies, so it will only re-evaluate the computed property when its dependencies change. This leads to more efficient reactivity updates.

3. **Less Code:** Often, you'll need fewer lines of code with computed properties compared to watchers, since you don’t have to manually track the previous and current values.

4. **Clearer Intent:** computed properties express a direct relationship between some sources and a derived value.

```vue
const totalPrice = computed(() => items.value.reduce((total, item) => total + item.price * item.quantity, 0))
```

#### Watchers:

1. **Side Effects:** Watchers are used to perform side effects or actions when a data property changes. They are more flexible and allow you to run arbitrary code in response to data changes.

2. **Asynchronous:** Watchers are asynchronous by nature, which means they can respond to changes over time and perform actions that might be asynchronous, like making API calls.

3. **Access to New and Old Values:** Watchers provide access to both the new and old values of the watched property, allowing you to perform actions based on the change.

```vue
watch(searchQuery, (newValue, oldValue) => { // Perform API request or other side effects console.log(`Search
query changed from "${oldValue}" to "${newValue}"`) // Example: Call a search function here //
search(newValue) })
```

In summary, use `computed properties` when you need to **_derive data_** based on existing properties. Use `watchers` when you need to respond to changes in data properties by performing **_side effects or async actions_**.

### Computed Properties and Utilizing Reactive Properties from Props

When we pass values from one component to another in Vue, we typically use props. However, there are times when these prop values need to be reactive, and it's important to note that props in Vue are read-only by default. While you can use computed properties to derive another value from your props, this may not be the most appropriate approach.

❗ Bad

```Vue
<template>
    <Dialog v-model="dialog" >
       // other components
    </Dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
	dialogProp: boolean
	messageRoom: MessageRoomType
}>()

const dialog = computed(() => dialogProp)
</script>
```

A better approach is to utilize Vue's `defineModel` or the VueUse library's `useVModel`.

✅ Recommended: [defineModel](https://blog.vuejs.org/posts/vue-3-3#definemodel)

The `defineModel` macro automatically registers a prop, and returns a ref that can be directly mutated:

**_Note:_** _that at the time of writing this feature is experimental and requires explicit opt-in_

```Vue
<template>
  <input v-model="modelValue" />
</template>

<script lang="ts" setup>
const modelValue = defineModel()
console.log(modelValue.value)
</script>
```

✅ Good: [useVModel](https://vueuse.org/core/useVModel/#usevmodel)

```Vue
<template>
    <Dialog v-model="dialog" >
       // other components
    </Dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
	dialogProp: boolean
	messageRoom: MessageRoomType
}>()

const dialog = useVModel(props, 'dialogProp', emit)
</script>
```

Using these approaches, you can effectively work with reactive prop values in Vue components.

### Side Effects

A side effect in code occurs when a function makes changes to data that are outside of its local scope. It is generally considered a best practice to avoid introducing side effects into a codebase.

In the context of computed properties, a side effect can be described as any modification of either the global state or the internal component state.

❗ Bad

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref('Ronrix')
const lastName = ref('Lante')
const array = ref([])

const fullName = computed(() => {
	firstName.value = 'Alvin' // Side effect
	return `${firstName.value} ${lastName.value}`
})

const reversedArray = computed(() => array.value.reverse()) // Side effect
</script>
```

In the `"Bad"` example, we introduce a side effect by altering the original values.

✅ Good

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref('Ronrix')
const lastName = ref('Lante')
const array = ref([])

const fullName = computed(() => `${firstName.value} ${lastName.value}`)

const reversedArray = computed(() => array.value.slice().reverse())
// OR
const reversedArray = computed(() => [...array.value].reverse())
</script>
```

In the `"Good"` example, we we resolve the side effect issue by using the immutable array method `.slice()` or the spread operator `...`, which creates a copy of the array rather than modifying the original array.

## Codegen:

We utilize code generation to automatically create TypeScript types based on our schema.

### Generating Graphql Types

To generate GraphQL types, you can simply execute the command `pnpm codegen`. This command will generate two files, namely **gql.ts** and **graphql.ts**, which can be found in the **_client/types/codegen_** directory.

When updating the types for our **query**, **mutation**, and **subscription** operations, please follow these steps:

1. Make sure that you are using `graphql()` and not `gql` in your code.
2. Wrap the entire query, mutation, or subscription inside the `graphql()` function.
3. After making these changes, run the `pnpm codegen` command.

You need to perform these steps every time you want to replace our previous operations to use the codegen.

**_Note1:_** _If you are creating a new **query**, **mutation**, or **subscription**, it should be written in a way that the operation is enclosed within the `graphql()`._

⏪ **Before:**

```graphql
export const updateRack = gql`
	mutation updateRack($input: RackInput!) {
		updateRack(input: $input) {
			...rack
		}
	}
	${rackFragment}
`
```

⏩ **After:**

```graphql
export const updateRack = graphql(`
	mutation updateRack($input: RackInput!) {
		updateRack(input: $input) {
			...rack
		}
	}
`)
```

**_Note2:_** _We omitted `${rackFragment}` because fragments are automatically imported in the code generation process._

**_Note3:_** _While query types are automatically inferred, they lose their type information when passed as props or used in functions._

To use these generated types in your codebase, start by importing the type you need:

```js
import type { InventoryAudit } from '~/types/codegen/graphql'

function close(data: InventoryAudit) {
	auditData.value = data
	actionModal.message = `Are you sure you want to close Investigation?`
	useModal(actionModal, save)
}
```

You can also assign types to the return values of your mutations like this:

```js
function createNewMessage(id: string, count: { unreadMessages: number }, messageInput: Ref<string>) {
	return {
		id,
		user: {
			...useUser().$state,
			name: useAuth().name,
			unreadMessageRooms: count.unreadMessages,
		},
		content: messageInput.value,
		created_at: dateTimeNow(),
		updated_at: dateTimeNow(),
		__typename: 'Message',
	} as UpsertMessageMutation['upsertMessage']
}
```

This function assigns the appropriate type **(UpsertMessageMutation['upsertMessage'])** to the return value of your mutation, ensuring type safety in your code.

## Graphql:

### Naming Conventions

**Type names**, **Input names** and **Enum names** are written in **PascalCase**

```graphql
input ConnectParentRelation {
	connect: ID
	sync: ID
	disconnect: Boolean
}

type TransferRackOutput {
	new: Inventory
	old: Inventory
	update: Inventory
}
```

While **Enum values** should use **ALL_CAPS**

```graphql
export enum QueryRacksPaginateWhereColumn {
	BranchId = 'BRANCH_ID',
	Categories = 'CATEGORIES',
	Id = 'ID',
	Name = 'NAME',
}
```

### Queries

In GraphQL, both `query name` and `variable name` are typically written in **camelCase**. It's worth noting that the variable name and query name **should match**.

❗ Bad

```graphql
export const user = gql`
	query filterUsers($where: QueryUsersWhereWhereConditions) {
		users(where: $where) {
			id
			name
		}
	}
`
```

✅ Good

```graphql
export const branchFilter = gql`
	query branchFilter {
		branches {
			id
			name
		}
	}
`
```

### Filter Queries

The `modelFilter`(e.g. `branchFilter`, `userFilter`) only returns the **_id_** and **_name_** attributes, which serve as the fundamental filters. When dealing with more complex requirements, it's advisable to use the `models` instead.

```graphql
export const branchFilter = graphql(`
	query branchFilter {
		branches {
			id
			name
		}
	}
`)
```

Since our primary use case involves the users selecting an **_id_** and us displaying the corresponding **_name_** in the comboBox, it's essential to limit the `modelFilter` to only return **_id_** and **_name._** This approach avoids any unnecessary details from the original query.

### Mutations

Graphql `Mutation names` and `variable`names written in **camelCase**. Please note that the variable name and query name **should match**.

```graphql
export const deleteBranch = gql`
	mutation deleteBranch($id: ID!) {
		deleteBranch(id: $id) {
			id
		}
	}
`
```

### Custom Mutations

Include the term `custom` when naming custom mutations and utilize **camelCasing** for the variable name and mutation name

```graphql
export const customUpsertInventory = gql`
	mutation customUpsertInventory($input: InventoryInput!) {
		customUpsertInventory(input: $input) {
			id
		}
	}
`
```

### Creating Queries and Mutations

In GraphQL, we organize queries and mutations based on Laravel models. All queries and mutations related to the **User.php** model should be declared within the **User.graphql** schema.

When creating new queries, we prefer to use Lighthouse default directives whenever possible. These directives include:

```graphql
@find
@all
@create
@update
@upsert
```

Please note that we use the **_singular_** form of the model name, which is `User`, for the `@find` directive, and the **_plural_** form, which is `Users`, for the `@all` directive. You can find more information about these directives in the [Lighthouse Documentation](https://lighthouse-php.com/master/api-reference/directives.html)

For mutations, we follow a naming convention where we `prefix the action` to the model name. Here are the mutation names:

```graphql
user
users
createUser
updateUser
upsertUser
deleteUser
restoreUser
forceDeleteUser
```

Please ensure that you use proper English when defining these queries and mutations in the schema.

## Others:

-   Most of the utilities we use are auto-imported with the exceptions of **_typescript types_** and **_graphql mutations_**.
-   When creating **Pinia stores**, we use the **_Options API_** to write our code.
-   **Shadcn Components**: Use **PascalCase** (`<DialogDescription></DialogDescription>`)
-   **Folders**: Use **lowercase** (`components/chart`)
-   **Pages** and **Layouts**: Use **kebab-case** (`manage-branch.vue`)
-   **All Other Components** (in the `/components` folder): Use **PascalCase** (`ModalActions.vue`)
-   **TypeScript Stores** and files except **GraphQL TypeScript**: Use **camelCase** (`useApp.ts`)
-   **GraphQL** and **GraphQL TypeScript** files: Use **PascalCase** (`InventoryAuditDetail.graphql` & `InventoryOrderPoint.ts`)
-   **Laravel Models**: Are always **_singular_** and use **PascalCase** (`User.php` & `MessageRoom.php`)
-   Backend files such as **_laravel model_**, **_graphql schema_**, and **_gql queries and mutations_** for vue-apollo should all have the same name and use **PascalCase** (`User.php`, `User.graphql`, `User.ts`)
