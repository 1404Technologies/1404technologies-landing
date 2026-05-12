---
name: coding-standards
description: General frontend engineering principles. Apply automatically when writing or reviewing any code in this project.
user-invocable: false
---

# Frontend Engineering Principles

Apply these standards to every code change in this project. Project-specific rules (file paths, tokens, class names) are in CLAUDE.md.

## General

- Prioritize readability and maintainability over cleverness
- Prefer composition over duplication
- Keep components small and focused — one responsibility per component
- Separate concerns clearly: layout, content, and UI primitives belong in separate layers
- Avoid monolithic files and deeply nested JSX
- Use explicit, descriptive naming — avoid abbreviations and hidden intent
- Avoid premature abstraction; extract only after repetition appears
- Remove dead code; avoid hidden side effects

## React

- Use functional components
- Avoid unnecessary state — derive values from props where possible
- Avoid prop drilling past one level
- Extract custom hooks only when logic is genuinely reusable; don't extract for its own sake
- Memoize (`useMemo`, `useCallback`, `React.memo`) only when there's a measurable perf reason
- Keep side effects isolated in `useEffect`; prefer declarative patterns everywhere else

## Component architecture

- Each page section is its own component
- Reusable UI elements (cards, tags, buttons) belong in shared components
- Keep page-level components mostly compositional — minimal logic
- Avoid large conditional rendering blocks; extract branches into named components

## Tailwind

- Keep utility usage consistent; avoid excessively long class strings — break into sub-components when a className becomes hard to scan
- Extract repeated patterns into reusable components
- Use design tokens consistently; avoid arbitrary values unless necessary
- Maintain consistent spacing rhythm; prefer responsive-first layouts

## Design system

- Always use existing design-system primitives before introducing new patterns
- Preserve visual consistency — spacing, typography, and sizing should feel uniform
- Keep variants predictable and scalable
- Avoid introducing one-off styles that won't generalize
- Ensure components remain composable and don't embed layout assumptions

## Landing page

- Optimize for visual hierarchy — clarity over visual noise
- Maintain strong spacing rhythm throughout
- Keep semantic HTML structure
- Ensure responsive layouts and accessibility

## Comments

- Write no comments by default
- One short line only when the **why** is non-obvious — a hidden constraint, a workaround, or a surprising invariant
- Never describe what the code does; names should do that
