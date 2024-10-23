provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket         = "my-website-terraform-state-dev"
    key            = "my-website-dev/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "my-website-terraform-state-lock-dev"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}
