import AwsServices from '../services/AwsServices';

export default class AwsActions {
    static async sendMessage(message) {
        return AwsServices.sendMessage(message);
    }
}
