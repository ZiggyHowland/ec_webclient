output "s3_id" {
  description = "ID of the EC2 instance"
  value = aws_s3_bucket.b.id 
}

output "s3_bucket_website_endpoint" {
  description = "Public IP address to webserver"
  value = aws_s3_bucket.b.website_endpoint
}