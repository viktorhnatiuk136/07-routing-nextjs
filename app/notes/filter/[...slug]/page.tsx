import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCatgorie = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = !slug || slug[0] === "all" ? undefined : slug[0];
  const response = await fetchNotes({
    page: 1,
    search: "",
    tag,
  });

  return <NoteList notes={response?.notes || []} />;
};

export default NotesByCatgorie;
