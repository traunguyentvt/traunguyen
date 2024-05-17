import defaultRestApi from '../common/RestApiInstance';
import AwsAPIs from '../common/AwsAPIs';

export default class AwsServices {
    static sendMessage = (message) => {
        const headers = {
        };
        return defaultRestApi.post(AwsAPIs.sendEmailAPI(), message, { headers });
    };
}
