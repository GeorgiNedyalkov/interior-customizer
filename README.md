# Interior Customisor

A website that helps home buyers customise their dream home.

## Introduction

Interior customizer is a template project that similates a Real Estate Development company who sells their apartments
with several options and features which you can add to your home.

The client selects the type of property they are looking for, chooses a given design (either standard or from a designer), selects
property features in several categories, and opts-in to add either a parking space or extra storage.

Finally the client get's a receipt for their order.

## Getting Started

Here is a guideline to run the project.

Step 1. Close this repo

```
git clone https://github.com/GeorgiNedyalkov/interior-customizer.git
```

Step 2. Enter the folder

```
cd interior_customiser
```

Step 3. Install dependencies

```
npm install
```

Step 4. Start the project

```
npm start
```

The project should be running locally on http://localhost:3000/

## Technology

-   [React](https://react.dev/)
-   [React Router](https://reactrouter.com/en/main)
-   [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Bugs

-   Designer page: Desginers with different length of images break the caroucel.

Choosing a new designer should set the index to one and show the first image.

-   Features page: Slide bug

Choosing a different feature starts does not start the caroucel with the first image.
You can select multiple features and then unselect them but the behavior should be a radio button type.
Features with one image should not have any buttons.

## Test

Add tests

## Author

-   [Georgi Nedyalkov](https://www.georginedyalkov.com)
