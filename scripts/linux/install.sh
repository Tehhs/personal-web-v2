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
if ! command -v aws &> /dev/null
then
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.22.10.zip" -o "awscliv2.zip"
    unzip awscliv2.zip -d /tmp/awscli-unzip
    sudo /tmp/awscli-unzip/aws/install
    rm -rf awscliv2.zip /tmp/awscli-unzip
else 
    echo "awscli is already installed"
fi



# Install go 
if ! command -v go &> /dev/null
then
    sudo rm -rf /usr/local/go && tar -C /usr/local -xzf go1.24.3.linux-amd64.tar.gz
    sudo curl "https://dl.google.com/go/go1.24.3.linux-amd64.tar.gz" -o "/tmp/go.tar.gz"
    sudo tar -C /usr/local -xzf /tmp/go.tar.gz
    sudo rm -rf /tmp/go.tar.gz

    # Add Go to PATH in ~/.bashrc if not already present
    if ! grep -q '/usr/local/go/bin' ~/.bashrc; then
        echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
    fi

    source ~/.bashrc
    export PATH=$PATH:/usr/local/go/bin
    go install github.com/go-delve/delve/cmd/dlv@latest
fi 


# Done 
echo "Install finished"

