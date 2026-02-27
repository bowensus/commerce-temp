import MyOrder from './_components/MyOrder';

async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = (await searchParams) ?? {};

  const filter = params?.filter ?? 'all';
  const sortby = params?.sortby ?? 'all';
  const page = params?.page ?? '1';

  return <MyOrder filter={filter} sortby={sortby} page={page} />;
}

export default Page;
