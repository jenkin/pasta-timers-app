#!/bin/bash

DIR="public"

npx ajv -s producers.schema.json -d $DIR/producers.json
for TIMER in $DIR/timers/*.json; do
    npx ajv -s timers.schema.json -d $TIMER
done
