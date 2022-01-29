if [ "$CIRCLE_BRANCH" == "master" ]; then
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker build -t julianspiess/syersy-web:"$CIRCLE_SHA1" ./app
    docker push julianspiess/syersy-web:"$CIRCLE_SHA1"

    # Deploying in production.
    echo "$DEPLOY_HOST" >> "$HOME/.ssh/known_hosts"
    echo "[+] Deploying (env=production, branch=master)"
    ssh -t "$DEPLOY_USERNAME"@"$DEPLOY_HOST" "$DEPLOY_CMD"
elif [ "$CIRCLE_BRANCH" == "staging" ]; then
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker build -t julianspiess/syersy-web:"$CIRCLE_SHA1" ./app
    docker push julianspiess/syersy-web:"$CIRCLE_SHA1"

    # Deploying in staging.
    echo "$DEPLOY_HOST" >> "$HOME/.ssh/known_hosts"
    echo "[+] Deploying (env=staging, branch=staging)"
    ssh -t "$DEPLOY_USERNAME"@"$DEPLOY_HOST" "$DEPLOY_CMD_STAGING"
fi
