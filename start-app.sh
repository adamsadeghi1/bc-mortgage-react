npm run build

docker stop bc-mortgage-react-container
docker rm -f bc-mortgage-react-container
docker rmi -f bc-mortgage-react-image

docker build -t bc-mortgage-react-image .
docker run -d -p 5170:5170 --name bc-mortgage-react-container bc-mortgage-react-image