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

resource "aws_s3_bucket" "devapp" {
  bucket = var.app_name

  tags = {
    Environment = "Dev"
  }
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
