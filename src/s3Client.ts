// Create service client module using ES6 syntax.
import { S3Client } from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-providers';

const s3Client = new S3Client({
  credentials: fromIni({ profile: '<Your Profile>' }),
});
export { s3Client };