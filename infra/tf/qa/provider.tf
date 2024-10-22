provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket         = "my-website-terraform-state-qa"
    key            = "my-website-qa/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "my-website-terraform-state-lock-qa"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}