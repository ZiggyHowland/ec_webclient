provider "aws" {
  region = "eu-north-1"
}

variable "server-ip"  {
  type = string
  default = "http://13.51.6.115:8111"
}


resource "aws_s3_bucket" "b" {
  bucket = "s3-s3p-assignment2"
  acl    = "public-read"
  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
      {
          "Effect": "Allow",
          "Principal": {
              "AWS": "*"
          },
          "Action": "s3:*",
          "Resource": [
              "arn:aws:s3:::s3-s3p-assignment2",
              "arn:aws:s3:::s3-s3p-assignment2/*"
          ]
      }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  force_destroy = true

}

resource "null_resource" "uploading-to-s3" {
  depends_on = [
    aws_s3_bucket.b,
  ]

  provisioner "local-exec" {
    command = "npm run build:production"
  }

  provisioner "local-exec" {
    command = "aws s3 cp build/. s3://s3-s3p-assignment2 --recursive"
  }

}



