terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "tf-state-276f3ffe"
    key    = "xlsx-append-only"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  default = "eu-central-1"
}

variable "app_name" {
  default = "xlsx-append-only"
}

variable "random_string" {
  default = "276f3ffe"
}

variable "account_id" {
  default = "730335219622"
}

resource "aws_s3_bucket" "devapp" {
  bucket = var.app_name

  tags = {
    Environment = "Dev"
  }
}

resource "aws_iam_user" "sa" {
  name = "${var.app_name}-sa"
}

resource "aws_iam_access_key" "sa" {
  user = aws_iam_user.sa.name
}

resource "aws_iam_policy" "sa" {
  name        = "next-s3-upload"
  description = "Policy for Next.js S3 upload"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid      = "STSToken"
        Effect   = "Allow"
        Action   = "sts:GetFederationToken"
        Resource = ["arn:aws:sts::${var.account_id}:federated-user/S3UploadWebToken"]
      },
      {
        Sid    = "S3UploadAssets"
        Effect = "Allow"
        Action = "s3:*"
        Resource = [
          "arn:aws:s3:::${var.app_name}",
          "arn:aws:s3:::${var.app_name}/*.xlsx",
        ]
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "sa" {
  user       = aws_iam_user.sa.name
  policy_arn = aws_iam_policy.sa.arn
}

resource "aws_s3_bucket_cors_configuration" "devapp" {
  bucket = aws_s3_bucket.devapp.id
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
  }
}

resource "aws_s3_bucket_public_access_block" "devapp" {
  bucket = aws_s3_bucket.devapp.id

  block_public_acls  = true
  ignore_public_acls = true
}

resource "aws_s3_bucket" "state" {
  bucket = "tf-state-${var.random_string}"
}
