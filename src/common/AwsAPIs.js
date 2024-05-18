import AwsAccess from './AwsAccess';

const { apiPath } = AwsAccess;

const AwsAPIs = {
    sendEmailAPI: () => `${apiPath}/email`,
};

export default AwsAPIs;
