import { useRouter } from 'next/router';
import Layout from '../../components/templates/Layout';

export default function Loans() {
    const router = useRouter()
    const { id } = router.query

  return (
    <Layout>
      <div>Loan page with ID {id}</div>
    </Layout>
  );
}
