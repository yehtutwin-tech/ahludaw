import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION, // e.g., "us-east-1"
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

function getKeyFromS3Url(url: string): string {
  const parts = new URL(url);
  // "/bucket/images/file.png" -> "images/file.png"
  const key = parts.pathname.replace(`/${process.env.AWS_BUCKET_NAME}/`, '');
  return key;
}

export async function deleteS3Image(fileKey: string) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: getKeyFromS3Url(fileKey),
  });

  try {
    await s3.send(command);
    console.log(`✅ Deleted ${fileKey} from S3`);
  } catch (err) {
    console.error('❌ Error deleting file from S3:', err);
    throw err;
  }
}
