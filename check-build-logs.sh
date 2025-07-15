#!/bin/bash

# Script to check Vercel build logs for the buildandbuildsite project

echo "Checking recent deployments for buildandbuildsite..."
echo ""

# Get the latest deployment URL
LATEST_DEPLOYMENT=$(vercel ls buildandbuildsite --json | jq -r '.[0].url' 2>/dev/null)

if [ -z "$LATEST_DEPLOYMENT" ]; then
    echo "Error: Could not fetch deployments"
    exit 1
fi

echo "Latest deployment: $LATEST_DEPLOYMENT"
echo ""

# Show deployment status
vercel inspect $LATEST_DEPLOYMENT

echo ""
echo "To view build logs for a specific deployment, use:"
echo "vercel inspect <deployment-url>"
echo ""
echo "Recent deployments with errors:"
vercel ls buildandbuildsite | grep "● Error" | head -5