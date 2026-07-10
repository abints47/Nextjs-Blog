import { parseISO, format} from 'date-fns';
import Layout from './layout';

export default function Post({ postData }){
    return (
        <Layout>
            <Date dateString={postData.date}></Date>

        </Layout>
    );
}