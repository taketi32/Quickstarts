#!/bin/bash
curl 'https://api.nexmo.com/tts/json' \
-d api_key=API_KEY \
-d api_secret=API_SECRET \
-d to=YOUR_NUMBER \
--data-urlencode "text=Hello from nexmo." \
-d from=NEXMO_NUMBER
