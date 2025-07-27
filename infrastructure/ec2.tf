resource "aws_key_pair" "new_key" {
    key_name   = "${var.name}-key"
    public_key = file("local_mate_${var.name}-key.pub")
}

resource "aws_instance" "name" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.new_key.key_name

  tags = {
    Name = "${var.name}-instance"
  }
}