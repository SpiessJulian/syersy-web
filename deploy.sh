echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t julianspiess/syersy-web:"$HASH" ./app
docker push julianspiess/syersy-web:"$HASH"

# Deploying in production.
echo "$SSH_KEY" | base64 --decode > id_rsa.private
chmod 600 id_rsa.private
echo "" >> "$HOME/.ssh/known_hosts"
ssh -t -i id_rsa.private "$DEPLOY_USERNAME"@syersy.com "$DEPLOY_CMD"
