# E-Commerce Web Application

## Overview

This project serves as a practical exercise to test your DevOps skills. It involves working with a sample e-commerce web application that allows users to browse and purchase kids' beds. Your task is to apply DevOps practices to containerize the application, set up CI/CD pipelines, and ensure proper validation and testing.

## Project Tasks

1. **Fork the Repository**
   - Begin by forking this repository to your own GitHub account.

2. **Create a Separate Branch**
   - Create a new branch named `devops-branch` in your forked repository. This branch will be used for all your DevOps-related tasks.

3. **Containerize the Application**
   - Write a `Dockerfile` to containerize the e-commerce web application. Ensure that the Dockerfile is properly configured to build an image for the application. Apply best practices in Dockerfile creation, such as:
     - Minimizing the number of layers
     - Using a small base image
     - Caching dependencies effectively
     - Cleaning up unnecessary files to reduce the image size

4. **Deploy Using CI/CD Pipeline**
   - Use the `Dockerfile` to deploy the application by setting up a CI/CD pipeline. This pipeline should be configured to run only for the `devops-branch`, not for the master branch.

5. **Set Up Docker Compose**
   - Create a `docker-compose.yml` file to deploy the application using Docker Compose. Although PostgreSQL is not used in this application, ensure that the Docker Compose setup is properly configured for the application container.

6. **Validation and Testing**
   - Add necessary validation and testing to confirm that the application runs correctly on a specific port. Ensure that all functionalities are working as expected and the deployment is stable.
