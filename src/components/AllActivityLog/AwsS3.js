// 수정된 AwsS3.js 파일
import AWS from "aws-sdk";

const config = {
  aws_reg: "us-east-1", // aws 지역 ex ) ap-northeast-2
  aws_key: "AKIAU6GDZG2NTEK2O26D", // aws 키
  aws_sec: "k/xily2Y2umAR79QN6DYVL64ad+z1nF/N6Qct99T", // aws 시크릿 키
};

AWS.config.update({
  region: config.aws_reg,
  accessKeyId: config.aws_key,
  secretAccessKey: config.aws_sec,
});

const s3 = new AWS.S3();

const getImg = async (t_IMAGE) => {
  try {
    const data = await s3
      .getObject({
        Key: `other_folder/${t_IMAGE}.jpg`,
        Bucket: "kingsmanbucket", // 버킷 이름
      })
      .promise();

    return data.Body;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

export { getImg };
