echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t julianspiess/syersy-web:"$CIRCLE_SHA1" ./app
docker push julianspiess/syersy-web:"$CIRCLE_SHA1"

# Deploying in production.
echo "syersy.com" >> "$HOME/.ssh/known_hosts"
ssh -t "$DEPLOY_USERNAME"@syersy.com "$DEPLOY_CMD"
