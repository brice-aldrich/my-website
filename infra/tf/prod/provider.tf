provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket         = "my-website-terraform-state-prod"
    key            = "my-website-prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "my-website-terraform-state-lock-prod"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}
