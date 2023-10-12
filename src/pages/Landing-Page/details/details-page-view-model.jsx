import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function useDetailsPageViewModel() {
  const { id } = useParams();
  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: cast, loading: loadingCast } = useFetch(`/movie/${id}/credits`);

  return { id, data, loading, cast, loadingCast };
}
