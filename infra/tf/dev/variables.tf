variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "website_bucket_name" {
  description = "Name of the S3 bucket for website hosting"
  type        = string
  default = "brice-aldrich-website-dev"
}