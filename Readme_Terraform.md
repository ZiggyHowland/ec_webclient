# Infrastructure by Terraform (frontend)

## Background

During reskill 2021 we had 3 assignments, all leading up to the 3rd and final 
assignment where we provisioned infrastructure in AWS, for both front- and 
backend. To do this we used the AWS Console and the AWS CLI as follows:   
- Backend: https://github.com/Toendel96/ec_webserver/blob/main/Readme_Backend_BuildAndDeployToECS.md
- Frontend:  https://github.com/ZiggyHowland/ec_webclient/blob/main/README.md

For the last week of reskill an investigation of provisioning infrastructure
through Terraform was done. (AWS CloudFormation was also looked into, but it 
seemed too heavy to get a grip around in only 5-6 days).

## Introduction

This article describes what is needed to get a React application built and 
set up in S3 as a static website. 

### Our backend setup

Check the Readme_Terraform.md in the backend github-project (link in background)

### Our frontend setup

React application running locally, and build created as a part of script. The build files
are uploaded to an S3-bucket, provisioned as a static website. The Terraform script is 
both creating the bucket, building the project and uploading the files.

> Note that the server IP address MUST be added to the frontend project before
> running the Terraform script. 

## Prerequisites
- Terraform CLI must be installed: https://www.terraform.io/downloads.html
- AWS CLI installed 
- AWS credentials registered on localhost (validate or add by `aws configure`)
- An AWS account and an user with admin access
- Cloned and updated GIT repo for frontend: https://github.com/ZiggyHowland/ec_webclient
- Running server for backend (see github for backend project)

## 1: Manual configurations

The IP-address to the backend API must be added in the React-project:
- The `server_ip`variable in the `main.tf` Terraform script
- The `REACT_APP_REST_ENDPOINT`in the `.env.production` file

## 2: Test running locally towards production server

Run command `npm run start:production` in the project folder to start the application using the production IP-settings.

## 3: Initialize Terraform (only first time)

Run command `terraform init` to initialize terraform script

## 4: Provision AWS infrastructure, build and copy files

Run command `terraform apply` and confirm by typing `yes` to start provisioning the AWS bucket. 

After the bucket is created the Terraform script will also build the files (by running `npm run build:production`) and 
copying the content of the build folder to S3 bucket (by running `aws s3 cp build/. s3://s3-s3p-assignment2 --recursive`)

## 5: Test the public IP to see if website is running

The last output from the Terraform script includes the "s3_bucket_website_endpoint" which can be copied
to your browser to verify the AWS bucket and it's content is working. 

## 6: Remove (destroy) AWS infrastructure

Remember to remove your S3 bucket and related content by using the command `terraform destroy`