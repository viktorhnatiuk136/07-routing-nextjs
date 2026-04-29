import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import { fetchNotes } from "../../lib/api";
import NotesClient from "./filter/[...slug]/Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  const page = 1;
  const search = "";
  const tag = undefined;

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, search, tag],
    queryFn: () => fetchNotes({ page, search, tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
