# Everclime Impact Cards Filter System

This project was developed as part of the Everclime Full-Stack Developer Tech Test. It implements a filtering system for Everclime's impact cards, providing users with an intuitive interface to filter and view impact cards based on various criteria.

## Project Overview

### Objective

Build a user-friendly filtering system for Everclime's impact cards that allows users to visually interact with and filter cards based on specific criteria.

### Features

- Visual filtering system for impact cards
- Filter cards based on multiple properties:
  - Brand
  - Location
  - Sponsor
  - Reward type
- Clean and intuitive user interface
- Real-time filtering updates

### Technology Stack

- Frontend: React with TypeScript, Redux Toolkit
- Backend: Ruby on Rails API
- Styling: TailwindCSS with DaisyUI
- Database: PostgreSQL

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Build the Docker containers:

```bash
docker compose build
```

3. Setup the database:

```bash
docker compose exec api rails db:setup
```

4. Start the application:

```bash
docker compose up
```

The application will be available at:

- Frontend: http://localhost:5173
- API: http://localhost:3000

### Development

The project is configured for development using VSCode's Dev Containers. To use this setup:

1. Install the "Dev Containers" extension in VSCode
2. Open the project in VSCode
3. When prompted, click "Reopen in Container"

This will give you a fully configured development environment with:

- Ruby and Rails tools
- Node.js and npm
- PostgreSQL
- All necessary extensions for Rails and React development

### Project Structure

- `/api` - Rails API backend
  - Contains controllers, models, and database configuration
  - Handles data persistence and business logic
- `/client` - React frontend
  - Contains components, pages, and state management
  - Implements the filtering interface and user interactions

# Rails API + React Template

I built this template to help start my development process a little faster, and thought of sharing it
for anyone that uses a setup like this.

I don't consider it production ready, as this was built thinking on the development environment,
but I don't think it requires much configuration to make it secure enough for production.

https://github.com/gabo71096/rails_react_template/assets/18217269/af727dfb-c0bd-4fce-87b0-ddafb3e1b1b2

# Try it out

The easiest way to try it out is by using `docker`.

To get it running, fork/clone the project and cd into it.

You will need to setup the DB before using it, so firstly I would run `docker compose build`, then
`docker compose exec api rails db:setup` and lastly `docker compose up`.

# What's included

This selection of tools are staple for most of my projects, and includes the following:

## Frontend

- React created with Vite using TypeScript.
- Redux Toolkit
- React-Router
- TailwindCSS, TailwindCSS Animated and DaisyUI.
- ESLint, Prettier.
- React Toastify.
- React Icons.

## Backend

- Rails in API mode with PostgreSQL.
- RSpec, Faker and FactoryBot.
- Byebug
- Bullet.
- Rubocop.
- Solargraph.

  ### Debugging Rails

  You can use `byebug` wherever you want, but to interact with it, you will need to attach a terminal to the running
  Rails container, so run `docker ps`, copy the ContainerID, and then run `docker attach ContainerID`
  to start debugging.

## VSCode

- Added `devcontainer.json` file to develop inside a container in VSCode, it includes:

  - Ruby
  - Node
  - Postgres
  - Many useful extensions related to Rails and React

  You will need the `Dev Containers` extension.

## Assessment Details

This project was completed as part of the Everclime Full-Stack Developer Tech Test with the following specifications:

- Time Limit: 4 hours
- Focus: Creating a user-friendly filtering interface for impact cards
- Key Requirements: Visual filtering system, clean interface, and intuitive user experience

### Example Data Structure

Impact cards in the system follow this structure:

| Card ID | Brand        | Location | Sponsor     | Reward            |
| ------- | ------------ | -------- | ----------- | ----------------- |
| CARD001 | EcoGear      | USA      | EarthFirst  | 10% Discount      |
| CARD002 | GreenFuture  | Canada   | ClimateCare | Free Reusable Bag |
| CARD003 | SustainaHome | USA      | EarthFirst  | 10 Plant Points   |
| CARD004 | OceanSave    | UK       | SeaGuard    | 10% Discount      |
| CARD005 | EcoGrow      | Germany  | BioLife     | Free Seed Pack    |

## Contributing

This project was developed for assessment purposes. However, if you'd like to contribute or suggest improvements, please feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This project is open-source and available under the MIT License.
