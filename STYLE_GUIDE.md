# Project Style Guide

## Table of Contents
1. [General Guidelines](#general-guidelines)
2. [Nuxt.js](#nuxtjs)
3. [Laravel](#laravel)
4. [GraphQL](#graphql)
5. [Commit Messages](#commit-messages)
6. [Code Reviews](#code-reviews)

## General Guidelines
- Write meaningful comments and keep them up to date.
- Follow naming conventions consistently.
- Ensure your code is clean and readable.

## Nuxt.js
### Project Structure
- Follow the default Nuxt.js project structure.
- Organize components, pages, and store modules logically.
- Place reusable components in the `components/` directory.
- Use `layouts/` for application layouts.

### Components
- Name components with PascalCase.
- Use single-file components (`.vue`).
- Keep template, script, and style tags organized in single-file components.

### Templates
- Use `v-bind` and `v-on` shorthand (`:` and `@`).
- Avoid inline styles; use scoped CSS instead.
- Prefer computed properties over methods in templates for reactive data.

### Scripts
- Use ES6+ syntax.
- Organize `data`, `computed`, `methods`, `watch`, and lifecycle hooks logically.
- Use Vuex for state management.

### Styling
- Use `scoped` CSS to avoid conflicts.
- Follow a consistent naming convention for CSS classes (e.g., BEM or utility-first).

## Laravel
### Project Structure
- Follow the default Laravel project structure.
- Use `app/` for application logic, `routes/` for route definitions, and `resources/` for views.

### Controllers
- Keep controllers concise; delegate complex logic to service classes.
- Name controllers with a singular resource name (e.g., `UserController`).

### Models
- Follow Laravel's naming conventions for models (singular, PascalCase).
- Use Eloquent relationships and accessors/mutators effectively.

### Migrations
- Use descriptive names for migrations.
- Group related changes into a single migration where appropriate.

### Routes
- Use route model binding where possible.
- Group routes logically and use route prefixes and namespacing.

### Blade Templates
- Use Blade's templating features effectively.
- Organize templates into `layouts`, `partials`, and `components`.

## GraphQL
### Schema Design
- Use descriptive names for types, queries, and mutations.
- Keep the schema consistent and well-documented.
- Use enums and custom scalars where appropriate.

### Resolvers
- Keep resolvers simple; delegate complex logic to service layers.
- Use dependency injection where possible.

### Queries and Mutations
- Follow a consistent naming convention.
- Group related fields logically.

### Error Handling
- Use standardized error responses.
- Document possible errors for each query/mutation.

## Commit Messages
- Use the present tense ("Add feature" not "Added feature").
- Capitalize the first letter of the commit message.
- Limit the subject line to 50 characters.
- Use a blank line to separate the subject from the body.
- Use the body to explain what and why vs. how.

### Example Commit Message
- Add user authentication
- Implement login and registration
- Add JWT token generation and verification
- Update user model and migrations

## Code Reviews
- Review code for readability, performance, and security.
- Provide constructive feedback.
- Ensure tests pass before approving a pull request.
- Use pull requests for all changes to the master branch.

