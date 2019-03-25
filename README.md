
# Twillio Caller

## What is Twilio?

https://twilio.kddi-web.com/

## How to build

```
git clone
npm install

export TWILIO_SID=${ YOUR_TWILIO_SID_HERE }
export TWILIO_TOKEN=${ YOUR_TWILIO_TOKEN_HERE }
export TWILIO_TEL_FROM=${ YOUR_TWILIO_TELNO_HERE }
```

```
npm run make
aws s3 cp ./build/twilioCaller.zip s3://{ YOUR_S3_BUCKET_HERE }/
aws lambda update-function-code --function-name {YOUR_LAMBDA_FUNCTION_NAME} --s3-bucket {YOUR_S3_BUCKET_HERE} --s3-key twilioCaller.zip --publish
```
