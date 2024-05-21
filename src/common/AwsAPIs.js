import AwsAccess from './AwsAccess';

const { apiPath } = AwsAccess;

const AwsAPIs = {
    sendEmailAPI: () => `${apiPath}/contact`
};

export default AwsAPIs;
