# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    #Install docker packages 
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
fi

# Start Docker service
sudo systemctl start docker

sudo apt-get update

sudo apt install make

#Install unzip 
sudo apt-get install unzip

# Install awscli 
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.22.10.zip" -o "awscliv2.zip"
unzip awscliv2.zip -d /tmp/awscli-unzip
sudo /tmp/awscli-unzip/aws/install
rm -rf awscliv2.zip /tmp/awscli-unzip

# Done 
echo "Install finished"