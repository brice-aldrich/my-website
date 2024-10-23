# outputs.tf
output "website_url" {
  value = aws_cloudfront_distribution.website.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.website.id
}