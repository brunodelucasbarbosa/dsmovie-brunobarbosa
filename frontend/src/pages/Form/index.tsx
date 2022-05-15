import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';


export default function index() {

    const params = useParams();


    return (
       <FormCard movieId={`${params.movieId}`}/>
    )
}
