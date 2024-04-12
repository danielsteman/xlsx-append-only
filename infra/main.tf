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
  bucket = "xlsx-append-only"

  tags = {
    Environment = "Dev"
  }
}

resource "aws_s3_bucket" "state" {
  bucket = "tf-state-${var.random_string}"
}
