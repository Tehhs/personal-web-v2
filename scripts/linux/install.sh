# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker could not be found. Please install Docker first."
    exit 1
fi

sudo systemctl start docker

sudo apt install make 

# To run your project, mount your project directory (replace /app with your project path inside the container):
# docker run --rm -it -v "$PWD":/app -w /app $DOCKER_IMAGE npm install
# docker run --rm -it -v "$PWD":/app -w /app $DOCKER_IMAGE npm run <your-script>
