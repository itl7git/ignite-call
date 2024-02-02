![Captura de tela 2023-10-25 133129](https://github.com/itl7git/ignite-call/assets/49194389/2d6e9f0a-bd2b-477b-9b6f-b70a23406c5c)

## About
Ignite Call - is a way to let people schedule appointments in their free time. Connect your Google Calendar and set your available times.
Final project of ** Ignite ReactJS ** offered by [Rocketseat](https://www.rocketseat.com.br/).

## Layout

The application layout is available on Figma:

<a href="https://www.figma.com/file/exNlfmkWFuFI5x38gaLuzX/Ignite-Call-(Community)?type=design&node-id=0%3A1&mode=design&t=VgTsngjoaqrNIoBy-1">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## How it works

This project is divided into two parts:
1. Backend (mysql data with PrismaORM)
2. Frontend (web folder)

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the web application

```bash

# Clone this repository
$ https://github.com/itl7git/ignite-call.git

# Access the project folder in your terminal
$ cd ignite-call

# Install the dependencies
$ npm install

# Run the migrations
$ npx prisma migrate dev

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3000 - go to http://localhost:3000

```

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([Next](https://nextjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Next Auth](https://next-auth.js.org/)**
-   **[Prisma ORM](https://www.prisma.io/)**
-   **[React Query](https://tanstack.com/query/v3/)**
-   **[React Hook Form](https://react-hook-form.com/)**
-   **[Zod](https://zod.dev/)**
-   **[Dayjs](https://day.js.org/)**
-   **[Phosphor Icons](https://phosphoricons.com/)**
-   **[Axios](https://github.com/axios/axios)**

- > See the file  [package.json]

## License

This project is under the license [MIT](./LICENSE).
