#!/bin/bash
#set -e
GOOGLE_PROJECT_ID="premium-odyssey-262200"
GOOGLE_SA="deployer@premium-odyssey-262200.iam.gserviceaccount.com"
GOOGLE_SA_FILE="./scripts/aestrro.sa.json"
setGCloud(){
    gcloud auth activate-service-account $GOOGLE_SA --key-file=$GOOGLE_SA_FILE
    gcloud --quiet config set project $GOOGLE_PROJECT_ID
    gsutil -m rsync -d -r public gs://www.aestrro.com
}
setGCloud
